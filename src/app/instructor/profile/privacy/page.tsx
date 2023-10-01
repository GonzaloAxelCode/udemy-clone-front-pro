"use client";
import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import P from "@/shared/UIComponents/CustomHTML/P";
import { useState } from "react";

const Page = () => {
  const [checkedForm, setCheckedForm] = useState({
    checkedHShowProfile: true,
    checkedCourses: true,
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCheckedForm({
      ...checkedForm,
      [name]: checked,
    });
  };
  return (
    <Flex col noitemscenter justifycenter  className="space-y-2">
      <Flex>
        <input
          name="checkedHShowProfile"
          onChange={onChange}
          checked={checkedForm.checkedHShowProfile}
          className="mr-2"
          style={{ scale: "0.8" }}
          type="checkbox"
        />
        <P sm>Show your profile to logged-in users</P>
      </Flex>
      <Flex>
        <input
          style={{ scale: "0.8" }}
          name="checkedCourses"
          onChange={onChange}
          checked={checkedForm.checkedCourses}
          className="mr-2"
          type="checkbox"
        />
        <P sm>Show courses youre taking on your profile page</P>
      </Flex>
      <Flex className="py-8">
        <Button variant="secondary" extendClass="px-4" size="md">
          Save
        </Button>
      </Flex>
    </Flex>
  );
};

export default Page;
