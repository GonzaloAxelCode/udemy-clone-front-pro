import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import InputTexts from "@/shared/UIComponents/Inputs/InputTexts";
import { useState } from "react";

const FormAddNewLecture = ({ handleCloseForm, handleAddItem }: any) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });
  const onChange = (e: any, valid: boolean = true) => {
    setForm({ ...form, [e.target.name]: valid ? e.target.value : "" });
    console.log(form);
  };

  return (
    <Flex
      noitemscenter
      full
      className="mb-8 space-x-2 p-3 relative z-2 bg-white border-1 border-dark-100 border-solid"
    >
      <div style={{ flex: "0 0 auto" }}>New Lecture:</div>

      <Flex col full itemsend noitemscenter between className="space-y-4">
        <InputTexts
          size="sm"
          place="Enter a title"
          value={form.title}
          name="title"
          variant="countstring"
          type="text"
          limit={80}
          onChange={onChange}
        />
        <Flex>
          <Flex full className="">
            <Button
              onClick={() => handleCloseForm()}
              variant="invert-primary"
              extendClass="h-[34px] "
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleAddItem(form.title);
                handleCloseForm("");
              }}
              variant="secondary"
              extendClass="h-[34px]"
            >
              Add Lecture
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FormAddNewLecture;
