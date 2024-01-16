import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import Link from "next/link";

import { useState } from "react";
import { cn } from "tailwind-cn";
import data_categories from "./_data_categories";

const SubNavCategories = () => {
  const [hoverDataCategory, setHoverDataCategory] = useState<any>([]);
  const [hoverContentSubCategoy, setHoverContentSubCategoy] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [keyHover, setKeyHover] = useState(0);

  return (
    <Flex
      maxscreen={800}
      col
      full
      style={{
        boxShadow:
          "0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08)",
      }}
      justifycenter
      className="relative"
      onMouseLeave={() => {
        setIsHover(false);
        setHoverDataCategory([]);
      }}
    >
      <Flex full justifycenter className="m-auto ">
        <ul className="flex w-full justify-center space-x-0">
          {data_categories.slice(0, 8).map((el: any, index: number) => {
            return (
              <li
                className=" flex items-center text-sm text-center relative"
                key={index}
              >
                <Link
                  onMouseEnter={() => {
                    setKeyHover(index);
                    setIsHover(true);
                    setHoverDataCategory(el.subcategorias);
                  }}
                  onMouseLeave={() => {
                    setKeyHover(index);
                  }}
                  href={`/topic/${el.text}`}
                  className={cn(
                    keyHover === index && isHover && "triangule",
                    " flex-grow h-full triangule-bottom-center py-3 px-4 text-gray-400 hover:text-purple-300"
                  )}
                >
                  {el.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </Flex>

      <Flex
        style={{
          position: "absolute",
          top: "100%",
          zIndex: 10,
        }}
        className=" bg-dark-100"
        justifycenter
        full
      >
        <ul className="flex w-full justify-center space-x-0">
          {hoverDataCategory?.slice(0, 8).map((el: any, index: number) => {
            return (
              <Link
                href={`/topic/${el.text}`}
                className="triangule-bottom-center py-3 px-4 text-white hover:text-purple-200"
                key={index}
              >
                <li className="text-sm text-center">{el.text}</li>
              </Link>
            );
          })}
        </ul>
      </Flex>
    </Flex>
  );
};

export default SubNavCategories;
