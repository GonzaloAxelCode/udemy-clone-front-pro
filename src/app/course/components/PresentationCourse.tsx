import Title from "@/shared/UIComponents/Texts/Title";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import LanguageIconWhite from "@/shared/UIComponents/icons/LanguageIconWhite";
import SubtitleIcon from "@/shared/UIComponents/icons/SubtitleIcon";
import UpdateDateIcon from "@/shared/UIComponents/icons/UpdateDateIcon";
import Breadcrumb from "@/shared/components/Breadcrumb";
import Link from "next/link";
//@ts-ignore
import ReactStars from "react-stars";

const PresentationCourse = () => {
  return (
    <Flex className="bg-dark-100 py-8 w-full ">
      <Flex
        col
        noItemsCenter
        justifyCenter
        className="flex-end m-auto text-white lg:w-[60%] w-[70%]"
      >
        <Breadcrumb />
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
            <span className="underline text-sm text-purplegray"> (25,091 ratings)</span>
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
      </Flex>
      <Flex className="lg:w-[340px] w-[0%]"></Flex>
    </Flex>
  );
};

export default PresentationCourse;
