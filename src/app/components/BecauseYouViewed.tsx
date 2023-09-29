import __courses from "@/shared/data/__courses";
import CarruselSimple from "@/shared/UIComponents/Carrusels/CarruselSimple";
import Carousel from "better-react-carousel";

import CardCourse from "@/shared/components/CardsCourse/CardCourse";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import Title from "@/shared/UIComponents/Texts/Title";
import Link from "next/link";
const BecauseYouViewed = () => {
  return (
    <Flex col noitemscenter>
      <Title className=" mt-3 mb-1 text-2xl ">
        <span>Top courses in </span>
        <span>
          <Link href="#" className="underline ml-1 text-linkpurple">
            {`“`} PMP Exam Prep Seminar - Complete Exam Coverage with 35 PDUs
            {`”`}
          </Link>
        </span>
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

export default BecauseYouViewed;
