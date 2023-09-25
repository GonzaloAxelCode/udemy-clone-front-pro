import Flex from "./Flex";

const WrapperSection = ({ children, ...args }: any) => {
  return (
    <Flex full noItemsCenter className="py-10">
      <Flex className="flex-start m-auto lg:max-w-[670px] max-w-[600px]">
        <Flex col noItemsCenter>
          {children}
        </Flex>
      </Flex>
      <Flex className=" lg:w-[380px] lg:w-[0px]"></Flex>
    </Flex>
  );
};

export default WrapperSection;
