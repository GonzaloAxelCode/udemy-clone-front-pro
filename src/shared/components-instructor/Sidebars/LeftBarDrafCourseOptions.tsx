import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import P from "@/shared/UIComponents/CustomHTML/P";
import CheckIcon from "@/shared/UIComponents/icons/CheckIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "tailwind-cn";

const _groups_links_options_left_bar = [
  {
    title: "Plan your course",
    links: [
      {
        text: "Intended learners",
        href: "/instructor/course/5563612/manage/goals",
      },
      {
        text: "Course structure",
        href: "/instructor/course/5563612/manage/course-structure",
      },
      {
        text: "Setup & test video",
        href: "/instructor/course/5563612/manage/setup",
      },
    ],
  },
  {
    title: "Create your content",
    links: [
      { text: "Film & edit", href: "/instructor/course/5563612/manage/film" },
      {
        text: "Curriculum",
        href: "/instructor/course/5563612/manage/curriculum",
      },
      {
        text: "Captions (optional)",
        href: "/instructor/course/5563612/manage/captions",
      },
      {
        text: "Accessibility (optional)",
        href: "/instructor/course/5563612/manage/accessibility",
      },
    ],
  },
  {
    title: "Publish your course",
    links: [
      {
        text: "Course landing page",
        href: "/instructor/course/5563612/manage/basics",
      },
      { text: "Pricing", href: "/instructor/course/5563612/manage/pricing" },
      {
        text: "Promotions",
        href: "/instructor/course/5563612/manage/promotions",
      },
      {
        text: "Course messages",
        href: "/instructor/course/5563612/manage/communications/messages",
      },
    ],
  },
];

const LeftBarDrafCourseOptions = () => {
  const path = usePathname();
  return (
    <div className="md2:block  hidden">
      <Flex col noitemscenter className="pr-6 py-8">
        <Flex col noitemscenter className="w-max">
          {_groups_links_options_left_bar.map((el: any, index: number) => {
            return (
              <Flex
                className="space-y-2 mb-7"
                col
                noitemscenter
                full
                key={index}
              >
                <P className="px-6" bold>
                  {el.title}
                </P>
                <ul className="flex flex-col w-full space-y-0">
                  {el.links.map((el2: any, index2: number) => {
                    return (
                      <Link
                        href={el2.href}
                        className={cn(
                          "px-6 py-2 hover:bg-gray-100 w-full h-full items-center flex space-x-2"
                        )}
                        key={index2}
                        style={{
                          borderLeft:
                            path === el2.href
                              ? "4px solid #000"
                              : "4px solid transparent",
                        }}
                      >
                        <span className=" h-[20px] flex items-center justify-center w-[20px] rounded-full border-1 border-solid border-dark-100 ">
                          <span className="">
                            <CheckIcon scale="0.7" />
                          </span>
                        </span>
                        <span>{el2.text}</span>
                      </Link>
                    );
                  })}
                </ul>
              </Flex>
            );
          })}
        </Flex>
        <Button variant="purple" extendClass="w-full" size="md">
          Submit for review
        </Button>
      </Flex>
    </div>
  );
};

export default LeftBarDrafCourseOptions;
