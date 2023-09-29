import ChartLight from "@/shared/UIComponents/icons/ChartLight";
import HelpIcon from "@/shared/UIComponents/icons/HelpIcon";
import MessageLightIcon from "@/shared/UIComponents/icons/MessageLightIcon";
import ToolLightIcon from "@/shared/UIComponents/icons/ToolLightIcon";
import VIdeoLightIcon from "@/shared/UIComponents/icons/VIdeoLightIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "tailwind-cn";
import Flex from "../../UIComponents/CustomHTML/Flex";
import Logo from "../../UIComponents/others/Logo";

import { useUIContext } from "../../hooks";
import LinkSidebar from "../LinksItems/LinkSidebar";
const _data_sidebar_instructor = [
  {
    path: "/instructor/courses",
    text: "Courses",
    icon: <VIdeoLightIcon />,
  },
  {
    path: "/instructor/communication",
    text: "Communication",
    icon: <MessageLightIcon />,
  },
  {
    path: "/instructor/performance",
    text: "Performance",
    icon: <ChartLight />,
  },
  {
    path: "/instructor/tools",
    text: "Tools",
    icon: <ToolLightIcon />,
  },
  {
    path: "/instructor/help",
    text: "Resources",
    icon: <HelpIcon />,
  },
];

const SidebarInstructor = () => {
  const path = usePathname();
  const { openMenuNavInstructor } = useUIContext();
  return (
    <Flex full col noitemscenter className="text-white relative z-5 w-[285px]">
      <Link
        className={cn(
          "w-[120px] h-[60px] pl-5 pt-4 ",
          !openMenuNavInstructor && "hidden-part-logo"
        )}
        href="/instructor/courses"
      >
        <Logo white />
      </Link>

      <Flex full col noitemscenter className="text-white">
        {_data_sidebar_instructor.map((el: any, index: number) => {
          return (
            <LinkSidebar
              key={index}
              active={path === el.path}
              href={el.path}
              text={el.text}
            >
              {el.icon}
            </LinkSidebar>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default SidebarInstructor;
