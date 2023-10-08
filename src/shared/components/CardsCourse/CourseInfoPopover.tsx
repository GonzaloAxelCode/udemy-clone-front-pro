import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import P from "@/shared/UIComponents/CustomHTML/P";
import PopoverTooltip from "@/shared/UIComponents/Popovers/PopoverTooltip";
import CheckIcon from "@/shared/UIComponents/icons/CheckIcon";
import HeartIcon from "@/shared/UIComponents/icons/HeartIcon";
import HighestRated from "@/shared/UIComponents/others/HighestRated";
const listaLearn = [
  {
    text: "The course provides the entire toolbox you need to become a data scientist",
  },
  {
    text: "Fill up your resume with in demand data science skills: Statistical analysis, Python programming with NumPy, pandas, matplotlib, and Seaborn, Advanced statistical analysis, Tableau, Machine Learning with stats models and scikit-learn, Deep learning with TensorFlow",
  },
  {
    text: "Impress interviewers by showing an understanding of the data science field",
  },
];

const CourseInfoPopover = ({ children, course, ...args }: any) => {
  return (
    <PopoverTooltip content={<div>{children}</div>}>
      <Flex
        full
        col
        noitemscenter
        key={course.id}
        between
        className="text-dark-100 p-7"
      >
        <Flex full col noitemscenter between>
          <P bold lg className=" w-[90%] line-h">{course.title}</P>

          <Flex full className="space-x-3">
            <HighestRated
              text="Hot & new"
              className="bg-red-200 text-red-500"
            />
            <span className="text-xs text-green-400">
              Updated <span className="font-bold mr-2 ">September 2023</span>
            </span>
          </Flex>
          <span className="pt-2  text-gray-300">
            {course.hours} total hours &middot; All Levels &middot; Subtitles
          </span>
          <p
            style={{
              lineHeight: "1.4",
            }}
            className="line-h text-sm py-2"
          >
            Complete Data Science Training: Mathematics, Statistics, Python,
            Advanced Statistics in Python, Machine & Deep Learning
          </p>
          <Flex col noitemscenter>
            {listaLearn.slice(0, 5).map((el: any, index: number) => {
              return (
                <div key={index} className="space-x-3 -ml-2 flex py-1">
                  <span className="px-1">
                    <CheckIcon scale="0.7" />
                  </span>
                  <div className="flex ">
                    <span
                      style={{
                        lineHeight: "1.4",
                      }}
                      className="text-sm text-gray-400"
                    >
                      {el.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </Flex>
          <Flex full className="space-x-3 pt-6">
            <Button extendClass="w-full" variant="purple">
              Add to cart
            </Button>
            <Button
              extendClass="rounded-full w-[40px] h-[40px]"
              variant="primary"
            >
              <HeartIcon scale="0.8" />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </PopoverTooltip>
  );
};

export default CourseInfoPopover;
