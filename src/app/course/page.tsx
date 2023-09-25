"use client";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import WrapperSection from "@/shared/UIComponents/Wrappers/WrapperSection";
import CourseContent from "./components/CourseContent";
import CurseBottomFixed from "./components/CurseBottomFixed";
import CurseTopFixed from "./components/CurseTopFixed";
import DescriptionCourse from "./components/DescriptionCourse";
import FrequentlyBoughtTogether from "./components/FrequentlyBoughtTogether";
import InstructorCourse from "./components/InstructorCourse";
import MoreCoursesBy from "./components/MoreCoursesBy";
import PresentationCourse from "./components/PresentationCourse";
import RequerimentsCourse from "./components/RequerimentsCourse";
import StudentsAlsoBought from "./components/StudentsAlsoBought";
import WhatYouLearn from "./components/WhatYouLearn";

const CoursePage = () => {
  return (
    <Flex col noItemsCenter full className="relative">
      <CurseTopFixed />
      <PresentationCourse />
      <WrapperSection>
        <WhatYouLearn />
        <CourseContent />

        <RequerimentsCourse />
        <DescriptionCourse />
        <StudentsAlsoBought />
        <FrequentlyBoughtTogether />
        <InstructorCourse />
        <MoreCoursesBy />
      </WrapperSection>
      <CurseBottomFixed />
    </Flex>
  );
};

export default CoursePage;
