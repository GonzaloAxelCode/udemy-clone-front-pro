"use client";
import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import P from "@/shared/UIComponents/CustomHTML/P";
import InputTexts from "@/shared/UIComponents/Inputs/InputTexts";
import PenWhiteIcon from "@/shared/UIComponents/icons/PenWhiteIcon";
import Link from "next/link";
import { useState } from "react";

const PageSecurity = () => {
  const [form, setForm] = useState({
    email: "gonzaloaxelh@gmail.com",
    password: "*********",
  });

  const onChange = (e: any, valid: boolean = true) =>
    setForm({ ...form, [e.target.name]: valid ? e.target.value : "" });

  return (
    <Flex col noitemscenter full className="flex-grow">
      <Flex col full noitemscenter className="space-y-4">
        <Flex full className="max-w-[600px]">
          <InputTexts
            place={form.email}
            value={form.email}
            name="email"
            disable
            type="text"
            onChange={onChange}
            label="Email:"
          />
        </Flex>
        <Flex noitemscenter itemsend full className="max-w-[600px]">
          <InputTexts
            place={form.password}
            value={form.password}
            name="password"
            disable
            type="password"
            onChange={onChange}
            label="Password:"
          />
          <Button extendClass="flex-end h-[48px] w-[48px]" variant="secondary">
            <PenWhiteIcon />
          </Button>
        </Flex>
      </Flex>

      <Flex
        noitemscenter
        col
        className="p-4 mt-6 max-w-[600px] hr-full shadow-lg"
      >
        <P bold>Multi-factor Authentication</P>
        <P className="pt-3">
          Increase your account security by requiring that a code emailed to you
          be entered when you log in. For more information on how multi-factor
          authentication works, refer to our Help Center article.
          <Link
            className="underline underline-offset-4 text-linkpurple	"
            href="#"
          >
            Help Center article.
          </Link>
        </P>
        <Button size="md" variant="secondary">
          Enable
        </Button>
      </Flex>
    </Flex>
  );
};

export default PageSecurity;
