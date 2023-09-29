import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import Title from "@/shared/UIComponents/Texts/Title";
import Medalcon from "@/shared/UIComponents/icons/Medalcon";
import PeopleIcon from "@/shared/UIComponents/icons/PeopleIcon";
import PlayIconDark from "@/shared/UIComponents/icons/PlayIconDark";
import StarIcon from "@/shared/UIComponents/icons/StarIcon";
import Link from "next/link";

const InstructorCourse = () => {
  return (
    <Flex full col noitemscenter>
      <Title className="mt-3 mb-3 text-2xl  ">Instructor</Title>
      <Flex col full noitemscenter>
        <Link
          className=" text-xl text-linkpurple underline"
          style={{
            fontWeight: 700,
            fontSize: "19px",
            textUnderlineOffset: "0.4rem",
          }}
          href="#"
        >
          Maximilian Schwarzmüller
        </Link>
        <p className="text-gray-300 my-1">
          AWS certified, Professional Web Developer and Instructor
        </p>
        <Flex>
          <img
            src="https://img-c.udemycdn.com/user/200_H/13952972_e853.jpg"
            className="w-[112px] h-[112px] rounded-full mr-3"
          />

          <Flex col noitemscenter full>
            <Flex className="w-full">
              <StarIcon scale="0.7" />
              <span className="text-sm ml-3 py-1 text-gray-400">
                4.6 Instructor Rating
              </span>
            </Flex>

            <Flex className="w-full">
              <Medalcon scale="0.7" />
              <span className="text-sm ml-3 py-1 text-gray-400">
                993,443 Reviews
              </span>
            </Flex>

            <Flex className="w-full">
              <PeopleIcon scale="0.7" />
              <span className="text-sm ml-3 py-1 text-gray-400">
                2,664,350 Students
              </span>
            </Flex>

            <Flex className="w-full">
              <PlayIconDark scale="0.7" />
              <span className="text-sm ml-3 py-1 text-gray-400">
                59 Courses
              </span>
            </Flex>
          </Flex>
        </Flex>

        <Flex col noitemscenter className="py-3">
          <p className="text-sm">
            In this course, youll learn how to create your own Slide Styles,
            Transitions and Templates in ProShow Producer 7. Youll learn how to
            create your own graphics that you may want to include in your
            designs and well also cover best practices for saving them,
            including labeling layers, identifying replaceable layers,
            categorizing your Styles and Transitions, and renaming individual
            slides in a Template. Youll also learn about the subtle, but
            important differences between linked layers and matched layers in a
            show template.
          </p>

          <p className="text-sm mt-3">
            Once youve started to create your own ProShow Designs, you may be
            ready to show them to the world, and maybe even make a little money
            on the side, by selling your designs on the Choice Slides
            Marketplace.
          </p>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InstructorCourse;
