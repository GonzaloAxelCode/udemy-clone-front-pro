"use client";
import "react-image-crop/dist/ReactCrop.css";

import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import P from "@/shared/UIComponents/CustomHTML/P";
import FileUploadImage from "@/shared/components-instructor/FileUploadImage";

const Page = () => {
  return (
    <Flex full col noitemscenter>
      <Flex full col noitemscenter className="max-w-[600px]">
        <span className="mb-1 font-bold text-gray-400 text-sm">
          Image preview
        </span>
        <P xs className="py-2">
          Minimum 200x200 pixels, Maximum 6000x6000 pixels
        </P>
        <FileUploadImage />
        <Flex className="py-8">
          <Button variant="secondary" extendClass="px-4" size="md">
            Save
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Page;
