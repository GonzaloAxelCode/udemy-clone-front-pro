import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import P from "@/shared/UIComponents/CustomHTML/P";
import ArrowLeftWhiteIcon from "@/shared/UIComponents/icons/ArrowLeftWhiteIcon";
import SettingsWhiteIcon from "@/shared/UIComponents/icons/SettingsWhiteIcon";
import HighestRated from "@/shared/UIComponents/others/HighestRated";
import styled from "styled-components";
const FixedTop = styled.div`
  z-index: 30;
  position: fixed;
  top: 0;
  width: 100%;
`;

const HeaderTopFixed = () => {
  return (
    <FixedTop className="text-white">
      <Flex full className="px-4 py-2 justify-center bg-dark-100 shadow-top">
        <Flex full className="flex-grow space-x-5">
          <ArrowLeftWhiteIcon scale="1.1" />
          <P
            bold
            style={{
              fontSize: "19px",
            }}
          >
            Aprender Javascript
          </P>
          <HighestRated text="DRAFT" className="text-white bg-gray-300" />
          <P md>0min of video content uploaded</P>
        </Flex>
        <Flex className="flex-end  space-x-3">
          <Button extendClass="w-full text-white" variant="invert-primary">
            Preview
          </Button>
          <Button variant="white" extendClass="px-5">
            Save
          </Button>
          <Flex>
            <button className="apreance-none">
              <SettingsWhiteIcon />
            </button>
          </Flex>
        </Flex>
      </Flex>
    </FixedTop>
  );
};

export default HeaderTopFixed;
