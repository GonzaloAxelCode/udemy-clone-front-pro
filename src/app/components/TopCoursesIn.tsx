import CarruselSimple from "@/shared/UIComponents/Carrusels/CarruselSimple";
import Title from "@/shared/UIComponents/Texts/Title";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import CardCourse from "@/shared/components/CardsCourse/CardCourse";
import CourseProps from "@/shared/models/CourseProps";
import Carousel from "better-react-carousel";
import Link from "next/link";

interface Props {
  categoryname: string;
  asLink?: boolean;
  courses: CourseProps[];
}
const TopCoursesIn = ({ asLink = false, categoryname, courses }: Props) => {
  return (
    <Flex col noItemsCenter>
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

      <CarruselSimple>
        {courses.map((el: any, index: number) => {
          return (
            <Carousel.Item key={index}>
              <CardCourse {...el} />
            </Carousel.Item>
          );
        })}
      </CarruselSimple>
    </Flex>
  );
};

export default TopCoursesIn;
