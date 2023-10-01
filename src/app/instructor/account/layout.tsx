"use client";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import HeaderAccount from "@/shared/components-instructor/Headers/HeaderAccount";

const Layout = ({ children }: any) => {
  return (
    <Flex full noitemscenter col className="mt-16 px-12 min-h-screen">
      <HeaderAccount />
      <Flex noitemscenter full className="flex-grow mt-6">
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
