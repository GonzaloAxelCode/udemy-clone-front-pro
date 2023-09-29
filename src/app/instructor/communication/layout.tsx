"use client";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import SubAsideSidebar from "@/shared/components-instructor/Sidebars/SubAsideSidebar";

const _data_subsidebar_example = [
  {
    path: "/instructor/communication/qa",
    name: "Q&A",
  },
  {
    path: "/instructor/communication/messages",
    name: "Messages",
  },
  {
    path: "/instructor/communication/assignments",
    name: "Assignments",
  },
  {
    path: "/instructor/communication/announcements",
    name: "Announcements",
  },
];
const Layout = ({ children }: any) => {
  return (
    <>
      <SubAsideSidebar data={_data_subsidebar_example} />
      <Flex full className="flex-grow mt-16">
        {children}
      </Flex>
    </>
  );
};

export default Layout;
