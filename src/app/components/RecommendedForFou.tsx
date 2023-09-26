import CarruselSimple from "@/shared/UIComponents/Carrusels/CarruselSimple";
import Title from "@/shared/UIComponents/Texts/Title";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import CardCourse from "@/shared/components/CardsCourse/CardCourse";
import Carousel from "better-react-carousel";

import __courses from "@/app/components/__courses";
const RecommendedForFou = () => {
  return (
    <Flex col noItemsCenter>
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
