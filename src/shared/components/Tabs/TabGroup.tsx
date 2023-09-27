"use client";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import React, { useState } from "react";
import { cn } from "tailwind-cn";
const TabGroup = (props: any) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  return (
    <Flex full col noItemsCenter>
      <Flex full className="hr-bottom">
        {props.children.map((child: any, index: any) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={cn(
              "text-base font-bold px-4 text-tabdisable py-3 border-b-2 border-white",
              index !== activeTab ? "active" : " border-dark-100 text-dark-100"
            )}
          >
            {child.props.name}
          </button>
        ))}
      </Flex>
      <Flex>
        {props.children.map((child: any, index: any) =>
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
