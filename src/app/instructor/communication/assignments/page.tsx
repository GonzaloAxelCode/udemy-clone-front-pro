"use client";

import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import PopoverTooltip from "@/shared/UIComponents/Popovers/PopoverTooltip";
import ArrowDownIcon from "@/shared/UIComponents/icons/ArrowDownIcon";
import { Checkbox } from "@carbon/react";
import Link from "next/link";

const page = () => {
  return (
    <Flex full col noitemscenter className="flex-grow">
      <h1 className=" text-4xl font-bold font-suisse-works pb-2">
        Assignments
      </h1>
      <Flex className="space-x-6">
        <Flex>
          <Checkbox labelText={`Unread(0)`} id="checkbox-label-1" />
        </Flex>

        <PopoverTooltip
          content={
            <Flex className="space-x-2 text-sm">
              <span>Sharing preference:{"  "}</span>
              <Flex className="font-bold">
                <span>All (0)</span>
                <ArrowDownIcon scale="0.7" />
              </Flex>
            </Flex>
          }
          placement="bottom"
          arrow={false}
        >
          <Flex col noitemscenter className=" w-[260px] py-3">
            <Link
              href="#"
              className="text-sm py-2 px-4  w-full  text-gray-300 hover:text-purple-300 m-auto "
            >
              All (0)
            </Link>
            <Link
              href="#"
              className="text-sm  py-2 px-4   w-full  text-gray-300 hover:text-purple-300 m-auto "
            >
              Instructor only (0)
            </Link>
            <Link
              href="#"
              className="text-sm  py-2 px-4   w-full  text-gray-300 hover:text-purple-300 m-auto "
            >
              Public (0)
            </Link>
          </Flex>
        </PopoverTooltip>

        <PopoverTooltip
          content={
            <Flex className="space-x-2 text-sm">
              <span>Feedback type:{"  "}</span>
              <Flex className="font-bold">
                <span>All(0)</span>
                <ArrowDownIcon scale="0.7" />
              </Flex>
            </Flex>
          }
          placement="bottom"
          arrow={false}
        >
          <Flex col noitemscenter className=" w-[260px] py-3">
            <Link
              href="#"
              className="text-sm py-2 px-4  w-full  text-gray-300 hover:text-purple-300 m-auto "
            >
              All (0)
            </Link>
            <Link
              href="#"
              className="text-sm  py-2 px-4   w-full  text-gray-300 hover:text-purple-300 m-auto "
            >
              No feedback (0)
            </Link>
            <Link
              href="#"
              className="text-sm  py-2 px-4   w-full  text-gray-300 hover:text-purple-300 m-auto "
            >
              Student only (0)
            </Link>
            <Link
              href="#"
              className="text-sm  py-2 px-4   w-full  text-gray-300 hover:text-purple-300 m-auto "
            >
              Instructor only (0)
            </Link>
            <Link
              href="#"
              className="text-sm  py-2 px-4   w-full  text-gray-300 hover:text-purple-300 m-auto "
            >
              Student and Instructor only (0)
            </Link>
          </Flex>
        </PopoverTooltip>

        <PopoverTooltip
          content={
            <Flex className="space-x-2 text-sm">
              <span>Sort by:{"  "}</span>
              <Flex className="font-bold">
                <span>All(0)</span>
                <ArrowDownIcon scale="0.7" />
              </Flex>
            </Flex>
          }
          placement="bottom"
          arrow={false}
        >
          <Flex col noitemscenter className=" w-[260px] py-3">
            <Link
              href="#"
              className="text-sm py-2 px-4  w-full  text-gray-300 hover:text-purple-300 m-auto "
            >
              Newest first
            </Link>
            <Link
              href="#"
              className="text-sm  py-2 px-4   w-full  text-gray-300 hover:text-purple-300 m-auto "
            >
              Oldest first
            </Link>
          </Flex>
        </PopoverTooltip>
      </Flex>
      <Flex col full className="mt-12 mx-auto">
        <img
          src="https://s.udemycdn.com/communication/empty-search.jpg"
          className="m-auto"
        />
        <p className="text-lg font-bold tex-center">No results</p>
        <p className="text-gray-300 text-center max-w-[440px] mt-2">
          Try a different filter
        </p>
      </Flex>
    </Flex>
  );
};

export default page;
