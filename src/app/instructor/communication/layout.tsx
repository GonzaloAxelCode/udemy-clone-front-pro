"use client";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
const Layout = ({ children }: any) => {
  return (
    <Flex full noitemscenter className="p-10 flex-grow">
      {children}
    </Flex>
  );
};

export default Layout;
