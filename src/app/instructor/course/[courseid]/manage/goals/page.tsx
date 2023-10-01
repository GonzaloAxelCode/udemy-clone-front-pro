"use client";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import P from "@/shared/UIComponents/CustomHTML/P";
import LinkOffset from "@/shared/UIComponents/Links/LinkOffset";
import GoalsFormSortable from "./components/GoalsFormSortable";

const Page = () => {
  return (
    <Flex full col noitemscenter>
      <Flex className="py-6 px-12 hr-bottom w-full">
        <P className="text-2xl my-2 font-suisse-works">Intended learners</P>
      </Flex>
      <Flex col full noitemscenter className="p-12">
        <P className="mb-12">
          The following descriptions will be publicly visible on your
          <LinkOffset text="Course Landing Page" />
          and will have a direct impact on your course performance. These
          descriptions will help learners decide if your course is right for
          them.
        </P>
        <P bold className="text-gray-400 mb-2">
          What will students learn in your course?
        </P>
        <P className=" mb-3">
          You must enter at least 4
          <LinkOffset text="learning objectives or outcomes" /> that learners
          can expect to achieve after completing your course.
        </P>
        <GoalsFormSortable />
      </Flex>
    </Flex>
  );
};

export default Page;
