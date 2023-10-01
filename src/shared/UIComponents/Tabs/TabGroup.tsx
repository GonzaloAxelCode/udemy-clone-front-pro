"use client";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "tailwind-cn";
const TabGroup = ({ children, name }: any) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  return (
    <Flex full col noitemscenter>
      <Flex full className="hr-bottom">
        {children.map((child: any, index: any) => (
          <Link href={child.props.href || "#"} key={index}>
            <button
              onClick={() => handleTabClick(index)}
              className={cn(
                "text-base font-bold px-1 mr-3 text-tabdisable py-3 border-b-2 border-white",
                index !== activeTab
                  ? "active"
                  : " border-dark-100 text-dark-100"
              )}
            >
              {child.props.name}
            </button>
          </Link>
        ))}
      </Flex>
      <Flex>
        {children.map((child: any, index: any) =>
          React.cloneElement(child, {
            isActive: index === activeTab,
            key: index,
          })
        )}
      </Flex>
    </Flex>
  );
};

export default TabGroup;
