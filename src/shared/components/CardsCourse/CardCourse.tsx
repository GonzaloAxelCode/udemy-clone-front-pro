import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import ReactStars2 from "@/shared/lib/react-stars";
import Link from "next/link";
import { useState } from "react";
import { cn } from "tailwind-cn";
import CourseInfoPopover from "./CourseInfoPopover";

interface CourseProps {
  id: number;
  image: string;
  title: string;
  hours: string;
  dataUpdated?: string;
  highestRated?: boolean;
  numValoraciones: string;
  author: string;
  betSeller?: boolean;
  rating?: string;
  peoples?: string;
  price: string;
}

const CardCourse = ({
  id,
  image,
  title,
  hours,
  dataUpdated,
  highestRated,
  numValoraciones,
  author,
  betSeller,
  rating,
  peoples,
  price,
}: CourseProps) => {
  const course = {
    id,
    image,
    title,
    hours,
    dataUpdated,
    highestRated,
    numValoraciones,
    author,
    betSeller,
    rating,
    peoples,
    price,
  };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <CourseInfoPopover course={course}>
      <Flex
        key={id}
        noitemscenter
        between
        col
        full
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="justify-between py-4"
      >
        <div className={cn("", isHovered && "image-hover")}>
          <img src={image} className="w-full hr-full" />
        </div>

        <Flex full col noitemscenter between>
          <span className="text-md font-bold text-dark-100 mt-3 leading-4 ">
            {title}
          </span>
          <span className="text-xs text-gray-300">{author}</span>

          <Flex col noitemscenter className="space-x-2">
            <Link href="#" className="flex space-x-2 items-center">
              <Flex className="space-x-1">
                <span className="text-orange-500 font-bold text-sm mt-1">
                  4.8
                </span>
                <span>
                  <ReactStars2
                    count={5}
                    size="15px"
                    char="★"
                    edit={false}
                    color1={"#b4690e"}
                    color2={"#b4690e"}
                  />
                </span>
              </Flex>
              <span className="text-xs text-gray-300">
                {" "}
                ({numValoraciones})
              </span>
            </Link>
          </Flex>
        </Flex>
        <span className="text-xs text-gray-300">
          {" "}
          {hours} total hours &middot; 46 lectures <br />
          &middot; all levels
        </span>
        <Flex className="space-x-3  mr-auto ">
          <span className="font-bold text-md">s/.{price}</span>
        </Flex>
      </Flex>
    </CourseInfoPopover>
  );
};

export default CardCourse;
