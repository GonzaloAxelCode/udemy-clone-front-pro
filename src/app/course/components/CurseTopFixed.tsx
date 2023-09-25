import Flex from "@/shared/UIComponents/Wrappers/Flex";
import Link from "next/link";
import styled from "styled-components";
//@ts-ignore
import ReactStars from "react-stars";
const FixedTop = styled.div`
  z-index: 30;
  position: fixed;
  top: 0;
  width: 100%; 
`;

const CurseTopFixed = () => {
  return (
    <FixedTop>
      <Flex
        maxScreen={600}
        full
        className="px-4 py-2 justify-center bg-dark-100 shadow-top"
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
        <Flex className="flex-end  space-x-2"></Flex>
      </Flex>
    </FixedTop>
  );
};

export default CurseTopFixed;