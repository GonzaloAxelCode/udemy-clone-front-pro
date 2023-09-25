import Button from "@/shared/UIComponents/Buttons/Button";
import LinkUnder from "@/shared/UIComponents/Links/LinkUnder";
import Title from "@/shared/UIComponents/Texts/Title";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import HeartWhite from "@/shared/UIComponents/icons/HeartWhite";
import LanguageIconWhite from "@/shared/UIComponents/icons/LanguageIconWhite";
import PlayIcon from "@/shared/UIComponents/icons/PlayIcon";
import SubtitleIcon from "@/shared/UIComponents/icons/SubtitleIcon";
import UpdateDateIcon from "@/shared/UIComponents/icons/UpdateDateIcon";
import HighestRated from "@/shared/UIComponents/others/HighestRated";
import Breadcrumb from "@/shared/components/Breadcrumb";
import Link from "next/link";
//@ts-ignore
import ReactStars from "react-stars";

import { cn } from "tailwind-cn";

const PresentationCourse = () => {
  return (
    <Flex className="bg-dark-100 py-8 w-full ">
      <Flex
        col
        noItemsCenter
        justifyCenter
        className="flex-end m-auto text-white lg:max-w-[700px] max-w-[600px]"
      >
        <Breadcrumb />
        <Flex>
          <Link href="#" className={cn("lg:hidden relative z-1 py-3")}>
            <Flex justifyCenter>
              <div className="flex flex-col gradient-dark">
                <img
                  src="https://img-c.udemycdn.com/course/750x422/543600_64d1_4.jpg"
                  alt="Course Preview"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translate(-50%)",
                  zIndex: 8,
                }}
              >
                <PlayIcon scale="2.5" />
              </div>
            </Flex>
          </Link>
        </Flex>

        <Title className="mt-3 mb-2 ">
          React - La Guía Completa: Hooks Context Redux MERN +15 Apps
        </Title>
        <p
          style={{ fontFamily: "'SF Pro Text' , sans-serif" }}
          className="text-lg mb-4 w-full"
        >
          Aprende React: Hooks, State, MERN, Next.js, Remix Run, Redux, Tailwind
          CSS, Prisma y mucho más - CREANDO +15 APPS REALES
        </p>
        <Flex noItemsCenter className="space-x-2 items-center">
          <Link href="#" className="flex space-x-2 items-center">
            <HighestRated />
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
          <span className="text-sm">105,177 students</span>
        </Flex>

        <span className="text-sm py-2">
          <span>Created by </span>
          <Link href="#" className="text-sm underline text-purplegray">
            Gonzalo Axel
          </Link>
        </span>

        <Flex className="text-sm">
          <div className="flex lg:flex-row flex-col">
            <p className="flex items-center text-sm mr-2">
              <UpdateDateIcon scale="0.8" />
              <span>Last updated 08/2018</span>
            </p>
            <p className="flex items-center text-sm mr-2">
              <LanguageIconWhite scale="0.8" />
              <span>Spanish</span>
            </p>
            <p className="flex items-center text-sm mr-2">
              <SubtitleIcon scale="0.8" />
              <span>Spanish [Auto], Spanish [Auto]</span>
            </p>
          </div>
        </Flex>
        <div className="lg:hidden block mt-3 w-full">
          <BoxPrices />
        </div>
      </Flex>
      <Flex className="lg:w-[340px] w-[0%]"></Flex>
    </Flex>
  );
};

export default PresentationCourse;

function BoxPrices() {
  return (
    <Flex full col noItemsCenter>
      <Flex col noItemsCenter className="w-full">
        <Title className="mb-3">S/249.90</Title>

        <Flex className="w-full space-x-2 mt-2">
          <Button extendClass="w-full" variant="purple" size="md">
            Add to cart
          </Button>
          <Button extendClass="w-auto" variant="invert-primary" size="md">
            <HeartWhite />
          </Button>
        </Flex>

        <span className="m-auto text-xs py-3 text-white">
          30-Day Money-Back Guarantee
        </span>
      </Flex>
      <Flex className="space-x-2 flex-grow my-3" full justifyCenter>
        <LinkUnder href="#share">Share</LinkUnder>
        <LinkUnder href="#gift">Gift this course</LinkUnder>
        <LinkUnder href="#coupon">Apply Coupon</LinkUnder>
      </Flex>
    </Flex>
  );
}
