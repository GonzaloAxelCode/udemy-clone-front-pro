import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import Link from "next/link";
//@ts-ignore
import ReactStars from "react-stars";

const CurseBottomFixed = () => {
  return (
    <div className=" lg:hidden block w-full fixed bottom-0 ">
      <Flex
        maxScreen={600}
        full
        className="px-4 py-2 justify-center bg-dark-100 shadow-top-dark"
      >
        <Flex full col noItemsCenter className="flex-grow">
          <span className="text-white text-md font-bold">
            How to Market Your Business
          </span>
          <Flex noItemsCenter className="space-x-2 items-center">
            <Link href="#" className="flex space-x-1 items-center">
              <Flex className="space-x-1">
                <span className="text-orange-300 font-bold text-sm mt-1">
                  4.8
                </span>
                <span>
                  <ReactStars
                    count={5}
                    size="15px"
                    char="★"
                    edit={false}
                    color1={"#f69c08"}
                    color2={"#f69c08"}
                  />
                </span>
              </Flex>
              <span className="underline text-sm text-purplegray">
                {" "}
                (25,091 ratings)
              </span>
            </Link>
            <span className="text-sm text-white pt-1">105,177 students</span>
          </Flex>
        </Flex>
        <Flex className="flex-end  space-x-2">
          <span className="text-lg font-bold text-white">S/59.90</span>
          <Button extendClass="w-[100px]" variant="white" size="md">
            Buy now
          </Button>
        </Flex>
      </Flex>
      <Flex
        minScreen={600}
        full
        className="px-4 py-2 space-x-3 justify-center bg-white shadow-top-dark"
      >
        <span className="text-lg font-bold ">S/59.90</span>
        <Button extendClass="w-full" variant="purple" size="md">
          Buy now
        </Button>
      </Flex>
    </div>
  );
};

export default CurseBottomFixed;
