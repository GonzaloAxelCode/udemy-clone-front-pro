import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import CheckIcon from "@/shared/UIComponents/icons/CheckIcon";
import HeartIcon from "@/shared/UIComponents/icons/HeartIcon";
import HighestRated from "@/shared/UIComponents/others/HighestRated";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useState } from "react";
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

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    padding: "0px",
    boxShadow:
      "rgba(0, 0, 0, 0.08) 0px 2px 4px, rgba(0, 0, 0, 0.08) 0px 4px 12px",

    maxWidth: 340,
    borderRadius: "0px",
    border: "1px solid #d1d7dc",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "white",
  },
}));
const CourseInfoPopover = ({ children, course, ...args }: any) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const _course = course;
  const handleTooltipOpen = () => {
    setTooltipVisible(true);
  };

  const handleTooltipClose = () => {
    setTooltipVisible(false);
  };

  return (
    <motion.div
      className="cursor-pointer"
      onMouseEnter={handleTooltipOpen}
      onMouseLeave={handleTooltipClose}
      {...args}
    >
      <HtmlTooltip
        title={
          <Flex
            className="text-dark-100 p-7"
            col
            noItemsCenter
            key={_course.id}
            between
            full
          >
            <Flex full col noItemsCenter between>
              <span className="text-xl font-bold w-[90%] mb-2 line-h">
                {_course.title}
              </span>

              <Flex full className="space-x-3">
                <HighestRated
                  text="Hot & new"
                  className="bg-red-200 text-red-500"
                />
                <span className="text-xs text-green-400">
                  Updated{" "}
                  <span className="font-bold mr-2 ">September 2023</span>
                </span>
              </Flex>
              <span className="pt-2  text-gray-300">
                {_course.hours} total hours &middot; All Levels &middot;
                Subtitles
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
              <Flex col noItemsCenter>
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
        }
        arrow
        placement="right"
        PopperProps={{
          popperOptions: {
            placement: "auto",
            modifiers: [
              {
                name: "flip",
                options: {
                  fallbackPlacements: ["left", "right"],
                },
              },
            ],
          },
        }}
        open={isTooltipVisible}
      >
        {children}
      </HtmlTooltip>
      <motion.div
        initial={{ scale: 0 }} // Escala inicial (invisible)
        animate={{ scale: isTooltipVisible ? 1 : 0 }} // Escala final (visible)
        transition={{ duration: 0.3 }} // Duración de la animación
        style={{
          transformOrigin: "center", // Punto de origen de la escala
          position: "absolute", // Ajusta la posición del tooltip
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default CourseInfoPopover;
