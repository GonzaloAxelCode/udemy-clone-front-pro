import AccordionGroup from "@/shared/UIComponents/Acordeon/AccordionGroup";
import Acordeon from "@/shared/UIComponents/Acordeon/Acordeon";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import Title from "@/shared/UIComponents/Texts/Title";

import ArrowDownIcon from "@/shared/UIComponents/icons/ArrowDownIcon";
import VideoIcon from "@/shared/UIComponents/icons/VideoIcon";
import temarioCursoReact from "@/shared/data/_temario_courses";
import Link from "next/link";
import { cn } from "tailwind-cn";

const CourseContent = () => {
  return (
    <Flex className="w-full py-4">
      <Flex className="w-full" col noitemscenter>
        <Title className="mt-3 mb-2 text-2xl ">Course content </Title>

        <Flex between className="w-full my-2">
          <span className="text-sm text-gray-500">
            46 sections &middot; 467 lectures &middot; 62h 16m total length
          </span>
          <Link href="#" className="font-bold text-sm text-purple-300">
            Expand al sections
          </Link>
        </Flex>

        <AccordionGroup>
          {temarioCursoReact.map((el: any, index: number) => {
            return (
              <Acordeon
                key={el.id}
                classNameHeader={cn(
                  "px-6 py-4 bg-gray-100 hr-bottom hr-left hr-right cursor-pointer",
                  index === 0 && "hr-top"
                )}
                headerComponent={
                  <Flex between full>
                    <Flex>
                      <ArrowDownIcon />
                      <Title className="text-base ml-2">{el.title}</Title>
                    </Flex>
                    <span className="text-sm text-gray-500">
                      {el.numLectures} lectures &middot; {el.timeMinLectures}
                    </span>
                  </Flex>
                }
              >
                {el.subItems.map((el2: any, index2: any) => {
                  return (
                    <Flex
                      className={cn(
                        "hr-top justify-between w-full cursor-pointer px-6 py-4 border-l border-r border-gray-200 border-solid"
                      )}
                      key={el2.id}
                    >
                      <Flex className="space-x-3 flex-grow">
                        <VideoIcon />
                        <span className="text-sm underline text-purple-300">
                          {el2.subTitle}{" "}
                        </span>
                      </Flex>
                      <Flex className="space-x-3">
                        {el2.preview && (
                          <span className="text-sm underline text-purple-300">
                            preview
                          </span>
                        )}
                        <span className="text-sm text-gray-400">
                          {el2.durationMin}
                        </span>
                      </Flex>
                    </Flex>
                  );
                })}
              </Acordeon>
            );
          })}
        </AccordionGroup>
      </Flex>
    </Flex>
  );
};

export default CourseContent;
