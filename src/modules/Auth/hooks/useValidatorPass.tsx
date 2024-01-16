import React, { useState } from "react";

const useValidatorPass = (enableValidation: boolean = false) => {
  const [passwordValidation, setPasswordValidation] = useState({
    isValidLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialCharacter: false,
    isBlurred: false,
  });

  const validatePassword = (password: string) => {
    const isValidLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(
      password
    );
    setPasswordValidation({
      isValidLength,
      hasUpperCase,
      hasLowerCase,
      hasNumber,
      hasSpecialCharacter,
      isBlurred: passwordValidation.isBlurred,
    });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    validatePassword(newPassword);
  };

  const handleBlur = () => {
    setPasswordValidation({
      ...passwordValidation,
      isBlurred: true,
    });
  };

  const isPasswordValid =
    passwordValidation.isValidLength &&
    passwordValidation.hasUpperCase &&
    passwordValidation.hasLowerCase &&
    passwordValidation.hasNumber &&
    passwordValidation.hasSpecialCharacter;
  return {
    isPasswordValid: enableValidation ? isPasswordValid : true,
    handleBlur,
    handlePasswordChange,
    passwordValidation,
  };
};

export default useValidatorPass;
