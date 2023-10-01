"use client";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import P from "@/shared/UIComponents/CustomHTML/P";
import HeaderSearchCourse from "./components/HeaderSearchCourse";
import InstructorResources from "./components/InstructorResources";
import MyCourseCard from "./components/MyCourseCard";
import SourceUnits from "./components/SourceUnits";

const InstructorCourses = () => {
  return (
    <Flex col noitemscenter full className="mt-16 px-10  flex-grow">
      <h1 className=" text-4xl font-bold font-suisse-works pb-2">Courses</h1>

      <HeaderSearchCourse />

      <MyCourseCard />
      <Flex full>
        <P center className="my-12 mx-auto">
          Based on your experience, we think these resources will be helpful.
        </P>
      </Flex>

      <InstructorResources />
      <Flex full>
        <P center className="my-24 mx-auto">
          Based on your experience, we think these resources will be helpful.
        </P>
      </Flex>
      <SourceUnits />
    </Flex>
  );
};

export default InstructorCourses;
