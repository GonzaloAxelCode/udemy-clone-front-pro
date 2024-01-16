import CarruselSimple from "@/shared/UIComponents/Carrusels/CarruselSimple";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import Title from "@/shared/UIComponents/Texts/Title";
import CardCourse from "@/shared/components/CardsCourse/CardCourse";
//@ts-ignore
import Carousel from "better-react-carousel";

import __courses from "@/shared/data/__courses";
const RecommendedForFou = () => {
  return (
    <Flex col noitemscenter>
      <Title className=" mt-3 mb-1 text-2xl ">
        <span> Recommended for you </span>
      </Title>
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

export default RecommendedForFou;
