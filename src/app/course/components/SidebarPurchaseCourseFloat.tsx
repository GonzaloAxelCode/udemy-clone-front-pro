import Button from "@/shared/UIComponents/Buttons/Button";
import LinkUnder from "@/shared/UIComponents/Links/LinkUnder";
import Title from "@/shared/UIComponents/Texts/Title";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import CoupIcon from "@/shared/UIComponents/icons/CoupIcon";
import DocIcon from "@/shared/UIComponents/icons/DocIcon";
import HeartIcon from "@/shared/UIComponents/icons/HeartIcon";
import InfiniteIcon from "@/shared/UIComponents/icons/InfiniteIcon";
import MovilIcon from "@/shared/UIComponents/icons/MovilIcon";
import PlayIcon from "@/shared/UIComponents/icons/PlayIcon";
import VideoIcon from "@/shared/UIComponents/icons/VideoIcon";
import WrapperSidebarPurchase from "@/shared/components/WrapperSidebarPurchase";
import Link from "next/link";
import { cn } from "tailwind-cn";
import useScrollY from "../../../shared/hooks/useScrollY";

const SidebarPurchaseCourseFloat = ({ extraClassNames = "" }) => {
  const scrollY = useScrollY();
  return (
    <WrapperSidebarPurchase scrollY={scrollY}>
      <Flex col noItemsCenter className={cn("w-[340px]", extraClassNames)}>
        <Link href="#" className={cn("",scrollY >= 300 && "hidden")}>
          <Flex justifyCenter className="relative">
            {/* Aplicar el gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-60 z-0"></div>

            <img
              className="relative z-1"
              src="https://img-c.udemycdn.com/course/750x422/543600_64d1_4.jpg"
              alt="Course Preview"
            />
            <p
              style={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%)",
              }}
            >
              <PlayIcon scale="2.5" />
            </p>
            <p className="absolute left-[50%] transform translate-x-[-50%] text-white font-bold bottom-2">
              Preview this course
            </p>
          </Flex>
        </Link>

        <Flex
          col
          noItemsCenter
          className="w-full p-5 border-solid border-1 border-gray-200 shadow-md"
        >
          <Title className="mb-3">S/249.90</Title>

          <Flex className="w-full space-x-2 mt-2">
            <Button extendClass="w-full" variant="purple" size="md">
              Add to cart
            </Button>
            <Button extendClass="w-auto" variant="primary" size="md">
              <HeartIcon />
            </Button>
          </Flex>
          <Flex className="w-full mt-2">
            <Button extendClass="w-full" variant="primary" size="md">
              Buy now
            </Button>
          </Flex>

          <span className="m-auto text-xs py-3 text-gray-400">
            30-Day Money-Back Guarantee
          </span>

          <Flex col noItemsCenter full>
            <p className="font-bold text-md mb-3">This course includes</p>
            <Flex col noItemsCenter full>
              <Flex className="w-full">
                <VideoIcon scale="0.7" />
                <span className="text-sm ml-3 py-1 text-gray-400">
                  1.5 hours on-demand video
                </span>
              </Flex>

              <Flex className="w-full">
                <DocIcon scale="0.7" />
                <span className="text-sm ml-3 py-1 text-gray-400">
                  5 articles
                </span>
              </Flex>

              <Flex className="w-full">
                <MovilIcon scale="0.7" />
                <span className="text-sm ml-3 py-1 text-gray-400">
                  Access on mobile and TV
                </span>
              </Flex>

              <Flex className="w-full">
                <InfiniteIcon scale="0.7" />
                <span className="text-sm ml-3 py-1 text-gray-400">
                  Full lifetime access
                </span>
              </Flex>

              <Flex className="w-full">
                <CoupIcon scale="0.7" />
                <span className="text-sm ml-3 py-1 text-gray-400">
                  Certificate of completion
                </span>
              </Flex>

              <Flex className="space-x-2 flex-grow my-3" full justifyCenter>
                <LinkUnder href="#share">Share</LinkUnder>
                <LinkUnder href="#gift">Gift this course</LinkUnder>
                <LinkUnder href="#coupon">Apply Coupon</LinkUnder>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </WrapperSidebarPurchase>
  );
};

export default SidebarPurchaseCourseFloat;
