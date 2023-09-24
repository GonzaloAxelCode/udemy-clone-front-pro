import Flex from "./Flex";

const WrapperSection = ({ children, ...args }: any) => {
  return (
    <Flex full noItemsCenter className="py-6">
      <Flex className="flex-start m-auto lg:w-[55%] w-[70%]">
        <Flex col noItemsCenter>
          {children}
        </Flex>
      </Flex>
      <Flex className=" lg:w-[380px] lg:w-[0px]"></Flex>
    </Flex>
  );
};

export default WrapperSection;
