"use client";

import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import P from "@/shared/UIComponents/CustomHTML/P";
import Link from "next/link";

const ClosePage = () => {
  return (
    <Flex full>
      <Flex full col noitemscenter className="max-w-[600px]">
        <P lg bold className="pb-3">
          Instructors:
        </P>
        <P className="pt-3">
          You are an instructor of at least one published or draft course.
          Please unpublish and delete the course.{" "}
          <Link
            className="underline px-1 underline-offset-4 text-linkpurple	"
            href="#"
          >
            Get instructions
          </Link>{" "}
          for further assistance. Afterwards, you will then have the option to
          close your account.
        </P>
      </Flex>
    </Flex>
  );
};

export default ClosePage;
