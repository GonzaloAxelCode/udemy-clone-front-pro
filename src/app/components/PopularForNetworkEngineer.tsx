import CarruselSimple from "@/shared/UIComponents/Carrusels/CarruselSimple";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import Title from "@/shared/UIComponents/Texts/Title";
import HighestRated from "@/shared/UIComponents/others/HighestRated";
import CardCourse from "@/shared/components/CardsCourse/CardCourse";
import __courses from "@/shared/data/__courses";
import Carousel from "better-react-carousel";
import Link from "next/link";
const PopularForNetworkEngineer = () => {
  return (
    <Flex col noitemscenter>
      <Title className="flex items-center mt-3 mb-1 text-2xl ">
        <span> Popular for Machine Learning Engineer </span>

        <Link
          href="#"
          className="px-3 underline-line text-sm underline ml-1 text-linkpurple"
        >
          Edit occupation
        </Link>
      </Title>
      <Flex className="py-2">
        <HighestRated className="bg-green-200 text-green-500" text="New" />
        <span className="ml-2 text-gray-300 text-xs">
          Inspired by your selections
        </span>
      </Flex>
      <Flex full>
        <CarruselSimple>
          {__courses.map((el: any, index: number) => {
            return (
              <Carousel.Item className="w-[200px]" key={index}>
                <CardCourse {...el} />
              </Carousel.Item>
            );
          })}
        </CarruselSimple>
      </Flex>
    </Flex>
  );
};

export default PopularForNetworkEngineer;
