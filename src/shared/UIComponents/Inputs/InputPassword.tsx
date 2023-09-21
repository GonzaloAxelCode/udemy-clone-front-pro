import useValidatorPass from '@/modules/Auth/hooks/useValidatorPass';
import { TextInput } from '@carbon/react';

const InputPassword = ({ name, onChange, isEnableValidating = false, errorMessage = null, ...args }: any) => {
    const {
        isPasswordValid,
        handleBlur,
        handlePasswordChange,
        passwordValidation
    } = useValidatorPass(isEnableValidating);


    let isValidatePassword = passwordValidation.isBlurred ? (
        <>
            {passwordValidation.isValidLength ? null : 'Al menos 8 caracteres. '}
            {passwordValidation.hasUpperCase ? null : 'Al menos una letra mayúscula. '}
            {passwordValidation.hasLowerCase ? null : 'Al menos una letra minúscula. '}
            {passwordValidation.hasNumber ? null : 'Al menos un número. '}
            {passwordValidation.hasSpecialCharacter ? null : 'Al menos un carácter especial. '}
        </>
    ) : ''


    return (

        <TextInput
            id="password"
            name={name}
            labelText="Password"
            type="password"
            required
            onChange={(e: any) => {
                handlePasswordChange(e)
                onChange(e)
            }}
            onBlur={handleBlur}
            invalidText={isEnableValidating ? isValidatePassword : errorMessage}
            invalid={isEnableValidating ? (passwordValidation.isBlurred && !isPasswordValid) : errorMessage}
            {...args}
        />

    );
}

export default InputPassword