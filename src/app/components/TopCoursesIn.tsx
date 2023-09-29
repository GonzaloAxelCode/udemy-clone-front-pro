import CarruselSimple from "@/shared/UIComponents/Carrusels/CarruselSimple";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import Title from "@/shared/UIComponents/Texts/Title";
import CardCourse from "@/shared/components/CardsCourse/CardCourse";
import CourseProps from "@/shared/models/CourseProps";
import Carousel from "better-react-carousel";
import Link from "next/link";

interface Props {
  categoryname: string;
  asLink?: boolean;
  courses: CourseProps[] | any;
}
const TopCoursesIn = ({ asLink = false, categoryname, courses }: Props) => {
  return (
    <Flex col noitemscenter id="tooltipBoundary">
      <Title className="flex flex-wrap mt-3  mb-1 text-2xl ">
        <span>Top courses in </span>
        {asLink ? (
          <Link href="#" className="underline ml-3 text-linkpurple">
            {categoryname}
          </Link>
        ) : (
          `${categoryname}`
        )}
      </Title>
      <div>
        <CarruselSimple>
          {courses.map((el: any, index: number) => {
            return (
              <Carousel.Item key={index}>
                <CardCourse {...el} />
              </Carousel.Item>
            );
          })}
        </CarruselSimple>
      </div>
    </Flex>
  );
};

export default TopCoursesIn;
