"use client";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import useScrollY from "@/shared/hooks/useScrollY";
import React from "react";
import { cn } from "tailwind-cn";
import SidebarPurchaseCourse from "./components/SidebarPurchaseCourse";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const scrollY = useScrollY();
  return (
    <section className="relative w-full">
      <div className="w-full">
        <Flex full col noitemscenter>
          {children}
        </Flex>

        <div
          id="#component-price"
          className={cn(
            "box right-[2%] xl:right-[10%]",
            scrollY >= 300 && "z-purchase-course transform translate-y-5",
            "hidden lg:block "
          )}
        >
          <div className="sticky top-0 right-0">
            <SidebarPurchaseCourse />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
