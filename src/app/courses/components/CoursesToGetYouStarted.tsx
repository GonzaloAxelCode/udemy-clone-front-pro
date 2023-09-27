"use client";
import __courses from "@/app/components/__courses";
import CarruselSimple from "@/shared/UIComponents/Carrusels/CarruselSimple";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import CardCourse from "@/shared/components/CardsCourse/CardCourse";
import TabGroup from "@/shared/components/Tabs/TabGroup";
import TabItem from "@/shared/components/Tabs/TabItem";
import Carousel from "better-react-carousel";

const CoursesToGetYouStarted = () => {
  return (
    <Flex full>
      <TabGroup>
        <TabItem name="Most Popular">
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
        </TabItem>
        <TabItem name="Trending">
          {" "}
          <Flex full>
            <CarruselSimple>
              {__courses.slice(2, 6).map((el: any, index: number) => {
                return (
                  <Carousel.Item className="w-[200px]" key={index}>
                    <CardCourse {...el} />
                  </Carousel.Item>
                );
              })}
            </CarruselSimple>
          </Flex>
        </TabItem>
      </TabGroup>
    </Flex>
  );
};

export default CoursesToGetYouStarted;
