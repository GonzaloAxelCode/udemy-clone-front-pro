"use client";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "tailwind-cn";

const SubAsideSidebar = ({ data }: any) => {
  const path = usePathname();
  if (!data) {
    return null;
  }
  return (
    <aside className="sticky top-0 z-1 p-0 p-0 m-0 bg-gray-100 ">
      <div
        className="absolute w-[230px] h-screen bg-gray-100"
        style={{ position: "absolute", zIndex: -1 }}
      ></div>
      <Flex full col noitemscenter className="mt-8 w-[230px]">
        {data?.map((item: any) => (
          <Link
            key={item.path}
            className={cn(
              "py-2 pl-8 pr-4 w-full",
              path === item.path && "font-bold"
            )}
            href={item.path}
          >
            {item.name}
          </Link>
        ))}
      </Flex>
    </aside>
  );
};

export default SubAsideSidebar;
