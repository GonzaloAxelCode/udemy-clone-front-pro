"use client";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import AllCoursest from "./components/AllCoursest";
import CoursesToGetYouStarted from "./components/CoursesToGetYouStarted";
import FeaturedCourse from "./components/FeaturedCourse";
import PopularInstructors from "./components/PopularInstructors";
import PopularTopics from "./components/PopularTopics";

const PageCourses = () => {
  return (
    <div>
      <p className="text-4xl font-suisse-works leading-10 py-8">
        Hardware Courses
      </p>
      <Flex full col noItemsCenter>
        <CoursesToGetYouStarted />
        <FeaturedCourse />
        <PopularInstructors />
        <PopularTopics />
        <AllCoursest />
      </Flex>
    </div>
  );
};

export default PageCourses;
