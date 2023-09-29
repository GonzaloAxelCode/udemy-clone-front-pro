"use client";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import CourseContent from "./components/CourseContent";
import CourseRatingReviews from "./components/CourseRatingReviews";
import CurseBottomFixed from "./components/CurseBottomFixed";
import CurseTopFixed from "./components/CurseTopFixed";
import DescriptionCourse from "./components/DescriptionCourse";
import FeaturedReview from "./components/FeaturedReview";
import FrequentlyBoughtTogether from "./components/FrequentlyBoughtTogether";
import InstructorCourse from "./components/InstructorCourse";
import MoreCoursesBy from "./components/MoreCoursesBy";
import PresentationCourse from "./components/PresentationCourse";
import RequerimentsCourse from "./components/RequerimentsCourse";
import StudentsAlsoBought from "./components/StudentsAlsoBought";
import WhatYouLearn from "./components/WhatYouLearn";

const CoursePage = () => {
  return (
    <Flex col noitemscenter full className="relative">
      <CurseTopFixed />
      <PresentationCourse />

      <Flex full noitemscenter className="py-10">
        <Flex className="flex-start m-auto lg:max-w-[670px] max-w-[600px]">
          <Flex col noitemscenter>
            <WhatYouLearn />
            <CourseContent />
            <RequerimentsCourse />
            <DescriptionCourse />
            <FeaturedReview />
            <StudentsAlsoBought />
            <FrequentlyBoughtTogether />
            <InstructorCourse />
            <CourseRatingReviews />
            <MoreCoursesBy />
          </Flex>
        </Flex>
        <Flex className=" lg:w-[380px] lg:w-[0px]"></Flex>
      </Flex>

      <CurseBottomFixed />
    </Flex>
  );
};

export default CoursePage;
