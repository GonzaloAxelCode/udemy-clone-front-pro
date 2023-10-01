import Flex from "@/shared/UIComponents/CustomHTML/Flex";

const layout = ({ children }: any) => {
  return (
    <Flex
      full
      noitemscenter
      className="flex-grow"
      id="container_layout_instructor"
      
    >
      {children}
    </Flex>
  );
};

export default layout;
