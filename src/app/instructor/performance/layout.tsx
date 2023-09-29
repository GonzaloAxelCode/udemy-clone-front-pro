"use client";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import SubAsideSidebar from "@/shared/components-instructor/Sidebars/SubAsideSidebar";

const _data_subsidebar_example = [
  {
    path: "/instructor/performance/overview",
    name: "Overview",
  },
  {
    path: "/instructor/performance/students",
    name: "Students",
  },
  {
    path: "/instructor/performance/reviews",
    name: "Reviews",
  },
  {
    path: "/instructor/performance/engagement",
    name: "Course engagement",
  },
  {
    path: "/instructor/performance/conversion",
    name: "Trafic & conversion",
  },
];
const layout = ({ children }: any) => {
  return (
    <>
      <SubAsideSidebar data={_data_subsidebar_example} />
      <Flex full className="flex-grow mt-16">
        {children}
      </Flex>
    </>
  );
};

export default layout;
