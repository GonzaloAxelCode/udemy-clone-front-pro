import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import EditorTextSimple from "@/shared/UIComponents/EditorTexts/EditorTextSimple";
import { useState } from "react";

const CreateDescriptionForm = ({ onClose }: any) => {
  const [form, setForm] = useState({
    lecture_description: "",
  });

  const onChange = (e: any, valid: boolean = true) => {
    setForm({ ...form, [e.target.name]: valid ? e.target.value : "" });
    console.log(form);
  };

  return (
    <Flex noitemscenter col full itemsend>
      <EditorTextSimple
        name="lecture_description"
        onChange={onChange}
        label="Lecture Description"
      />
      <Flex className="w-full flex-end border-b-1 border-solid border-gray-200">
        <div className="ml-auto my-2">
          <Button
            variant="white"
            size="xs"
            extendClass="py-1 px-3 hover:bg-white"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="secondary"
            size="xs"
            extendClass="py-1 px-3"
            onClick={onClose}
          >
            Save
          </Button>
        </div>
      </Flex>
    </Flex>
  );
};

export default CreateDescriptionForm;
