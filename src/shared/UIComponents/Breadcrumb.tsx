import Link from "next/link";
import Flex from "./CustomHTML/Flex";
import ArrowLeftIcon from "./icons/ArrowLeftIcon";

//   adadad/asad/
const Breadcrumb = ({ pathObject }: { pathObject?: string }) => {
  let _pathObject = [
    {
      text: "Development",
      href: "#",
    },
    {
      text: "Web Development",
      href: "#",
    },
    {
      text: "React JS",
      href: "#",
    },
  ];
  return (
    <Flex className="">
      {_pathObject.map((el: any, index: number) => {
        return (
          <span
            className="flex items-center text-sm font-bold text-purplegray"
            key={index}
          >
            <Link href={el.href}>{el.text}</Link>

            {_pathObject.length - 1 !== index && (
              <ArrowLeftIcon className="invert" />
            )}
          </span>
        );
      })}
    </Flex>
  );
};

export default Breadcrumb;
