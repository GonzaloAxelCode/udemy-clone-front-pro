"use client";
import CourseContent from "./components/CourseContent";
import PresentationCourse from "./components/PresentationCourse";
import SidebarPurchaseCourseFloat from "./components/SidebarPurchaseCourseFloat";

const CoursePage = () => {
  return (
    <div className="relative">
      <PresentationCourse />

      <div className="absolute top-20 right-20 z-10 bg-white">
        <SidebarPurchaseCourseFloat />
      </div>
      <article>
        <CourseContent />
      </article>
    </div>
  );
};

export default CoursePage;
