"use client";
import Button from "@/shared/UIComponents/Buttons/Button";
import Input from "@/shared/UIComponents/Inputs/Input.styled";
import InputPassword from "@/shared/UIComponents/Inputs/InputPassword";
import { useState } from "react";
import InlineError from "../UIComponents/others/InlineError";
import Space from "../UIComponents/others/Space";
const FormLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  const onChange = (e: any, valid: boolean = true) =>
    setFormData({ ...formData, [e.target.name]: valid ? e.target.value : "" });

  return (
    <form className="w-[500px] m-10" onSubmit={onSubmit}>
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
        isEnableValidating={false}
        onChange={onChange}
        value={formData.password}
      />

      <Space />
      <InlineError> Las credenciales no son las correctas.</InlineError>
      <Space />
      <Button type="submit" variant="purple">
        Iniciar Session
      </Button>
    </form>
  );
};

export default FormLogin;
