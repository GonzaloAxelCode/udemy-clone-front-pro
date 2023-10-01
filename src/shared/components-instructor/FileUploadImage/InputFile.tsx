import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
//@ts-ignore
import InputFiles from "react-input-files";
const InputFile = ({ onSelectFile }: any) => {
  return (
    <div id="input-crop">
      <InputFiles
        accept="image/*"
        onChange={(_: any, e: any) => {
          onSelectFile(e);
        }}
      >
        <Flex
          full
          className=" border-1 border-gray-500 border-solid relative z-1"
        >
          <Flex
            full
            className="bg-gray-100 border-r-1 border-gray-500 border-solid px-3 h-[48px]"
          >
            No file selected
          </Flex>
          <Button
            extendClass="border-0 w-[180px] border-gray-500 border-solid"
            size="md"
            variant="primary"
          >
            Upload Image
          </Button>
        </Flex>
      </InputFiles>
    </div>
  );
};

export default InputFile;
