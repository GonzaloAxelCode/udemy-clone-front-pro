"use client";

import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import P from "@/shared/UIComponents/CustomHTML/P";
import Link from "next/link";
import { useState } from "react";

const PageMessages = () => {
  const [checkedForm, setCheckedForm] = useState({
    checkedTurnOff: false,
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCheckedForm({
      ...checkedForm,
      [name]: checked,
    });
  };
  return (
    <Flex col noitemscenter>
      <Flex
        onClick={() =>
          setCheckedForm({
            ...checkedForm,
            checkedTurnOff: !checkedForm.checkedTurnOff,
          })
        }
        noitemscenter
        className="select-none cursor-pointer  mb-5 border-1 border-dark-100 border-solid max-w-[600px] p-3"
      >
        <input
          name="checkedTurnOff"
          onChange={onChange}
          checked={checkedForm.checkedTurnOff}
          className="mr-4 ml-1 mt-1"
          type="checkbox"
        />

        <Flex col noitemscenter>
          <P bold>Turn off direct messaging</P>
          <P sm>
            When you turn off direct messages, you will no longer be able to
            send or receive direct messages as an instructor.
          </P>
        </Flex>
      </Flex>
      <Link className="underline underline-offset-4 text-linkpurple	" href="#">
        Learn more about the setting
      </Link>
      <Flex className="py-8">
        <Button variant="secondary" extendClass="px-4" size="md">
          Save
        </Button>
      </Flex>
    </Flex>
  );
};

export default PageMessages;
