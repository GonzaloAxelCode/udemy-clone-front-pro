import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import InputTexts from "@/shared/UIComponents/Inputs/InputTexts";
import { useState } from "react";
import useCurriculum from "../functions/useCurriculumContext";
const FormAddNewSection = ({ handleAddNewSection }: any) => {
  const [form, setForm] = useState({
    title: "",
    learning_objetive: "",
  });
  const onChange = (e: any, valid: boolean = true) => {
    setForm({ ...form, [e.target.name]: valid ? e.target.value : "" });
    console.log(form);
  };
  const { openCreateFormNewSection, setOpenCreateFormNewSection } =
    useCurriculum();
  return (
    <Flex
      noitemscenter
      full
      className=" mb-4 space-x-2 p-3 relative z-2 bg-white border-1 border-dark-100 border-solid"
    >
      <div style={{ flex: "0 0 auto" }} className="font-bold">
        Section:
      </div>

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

        <InputTexts
          size="sm"
          place="Enter a Learning Objective"
          value={form.learning_objetive}
          name="learning_objetive"
          variant="countstring"
          type="text"
          limit={80}
          label="What will students be able to do at the end of this section?
                  "
          onChange={onChange}
        />
        <Flex>
          <Flex full className="">
            <Button
              variant="invert-primary"
              onClick={() => setOpenCreateFormNewSection(false)}
              extendClass="h-[34px] "
            >
              Cancel
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                handleAddNewSection(form.title, form.learning_objetive);
                setOpenCreateFormNewSection(false);
              }}
              extendClass="h-[34px]"
            >
              Save Section
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FormAddNewSection;
