import Flex from "@/shared/UIComponents/CustomHTML/Flex";
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
const layout = ({ children }: any) => {
  return (
    <Flex full noitemscenter className="d">
      {children}
    </Flex>
  );
};

export default layout;
