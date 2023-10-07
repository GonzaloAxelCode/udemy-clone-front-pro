"use client";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import CurriculumListAndSublists from "./components/CurriculumListAndSublists";

const Page = () => {
  return (
    <Flex col full noitemscenter className="p-12 space-y-10">
      <CurriculumListAndSublists />
    </Flex>
  );
};

export default Page;

