import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import { HeaderProfile } from "@/shared/components-instructor/Headers/HeaderProfile";

const Layout = ({ children }: any) => {
  return (
    <Flex full noitemscenter col className="mt-16 px-12 min-h-screen">
      <HeaderProfile />
      <Flex noitemscenter full className="flex-grow mt-6">
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
