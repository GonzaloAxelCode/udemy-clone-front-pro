"use client";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import WrapperSection from "@/shared/UIComponents/Wrappers/WrapperSection";
import CourseContent from "./components/CourseContent";
import CurseBottomFixed from "./components/CurseBottomFixed";
import PresentationCourse from "./components/PresentationCourse";
import SidebarPurchaseCourseFloat from "./components/SidebarPurchaseCourseFloat";
import WhatYouLearn from "./components/WhatYouLearn";

const CoursePage = () => {
  return (
    <Flex col noItemsCenter full className="relative">
      <PresentationCourse />
      <div className="hidden lg:flex">
        <SidebarPurchaseCourseFloat extraClassNames="absolute top-8 right-12 z-10 bg-white" />
      </div>
      <WrapperSection>
        <WhatYouLearn />
        <CourseContent />
      </WrapperSection>
      <CurseBottomFixed />
    </Flex>
  );
};

export default CoursePage;
