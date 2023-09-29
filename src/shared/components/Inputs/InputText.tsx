"use client";
import { TextInput } from "@carbon/react";
import { useState } from "react";
const InputText = ({
  value,
  name,
  label = "My label",
  message = null,
  ...args
}: any) => {
  const [blur, setBlur] = useState(false);

  return (
    <TextInput
      name={name}
      value={value}
      id={`text-input-${name}`}
      labelText={label}
      invalid={blur && (value == null || value === "")}
      invalidText={value == null || value === "" ? "Campos Vacios" : null}
      helperText={message && message}
      pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
      onBlur={() => setBlur(true)}
      {...args}
    />
  );
};

export default InputText;
