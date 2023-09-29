"use client";
import Button from "@/shared/UIComponents/Buttons/Button";
import InputPassword from "@/shared/components/Inputs/InputPassword";
import Input from "@/shared/components/Inputs/InputText";
import { useState } from "react";
import InlineError from "../../UIComponents/others/InlineError";
import Space from "../../UIComponents/others/Space";

const FormRegister = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    re_password: "",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  const onChange = (e: any, valid: boolean = true) =>
    setFormData({
      ...formData,
      [e.target.name]: valid ? e.target.value : "ddd",
    });

  return (
    <form className="w-[500px] m-10" onSubmit={onSubmit}>
      <Input
        required
        name="username"
        value={formData.username}
        onChange={onChange}
        label="Username"
      />
      <Input
        required
        name="first_name"
        value={formData.first_name}
        onChange={onChange}
        label="Nombres"
      />
      <Input
        required
        name="last_name"
        value={formData.last_name}
        onChange={onChange}
        label="Apellidos"
      />
      <Space />
      <Input
        required
        name="email"
        label="Email"
        value={formData.email}
        type="email"
        onChange={onChange}
      />

      <Space />
      <InputPassword
        required
        name="password"
        isEnableValidating
        onChange={onChange}
        value={formData.password}
      />
      <Space />
      <InputPassword
        required
        name="re_password"
        isEnableValidating={false}
        onChange={onChange}
        value={formData.re_password}
        errorMessage={
          formData.password !== formData.re_password
            ? "Las contraseñas no son iguales"
            : null
        }
      />

      <Space />

      <InlineError>Empty</InlineError>
      <Space />
      <Button type="submit" variant="primary">
        Registrarse
      </Button>
    </form>
  );
};

export default FormRegister;
