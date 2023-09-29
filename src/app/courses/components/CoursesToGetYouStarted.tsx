"use client";
import CarruselSimple from "@/shared/UIComponents/Carrusels/CarruselSimple";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import TabGroup from "@/shared/UIComponents/Tabs/TabGroup";
import TabItem from "@/shared/UIComponents/Tabs/TabItem";
import CardCourse from "@/shared/components/CardsCourse/CardCourse";
import __courses from "@/shared/data/__courses";
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
