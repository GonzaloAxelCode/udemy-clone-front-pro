"use client"
import FormLogin from "../shared/components/FormLogin";
import FormRegister from "../shared/components/FormRegister";
import Space from "../shared/UIComponents/others/Space";


export default function Inicio() {
  return (
    <main>
      <h1>Este es el inicio</h1>

      <div className="flex">
        <FormLogin />
        <FormRegister />
      </div>
      <Space />
    </main>
  );
}
