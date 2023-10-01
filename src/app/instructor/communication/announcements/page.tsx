"use client";

import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import Link from "next/link";

const page = () => {
  return (
    <Flex full col noitemscenter className="flex-grow">
      <h1 className=" text-4xl font-bold font-suisse-works">Announcements</h1>

      <Flex col full justifycenter className="mt-10 mx-auto">
        <img
          src="https://s.udemycdn.com/communication/empty-mailbox-v2.jpg"
          className="m-auto"
        />
        <p className="text-lg font-bold tex-center">No announcements yet</p>
        <p className="inline text-gray-300 text-center max-w-[440px] mt-4">
          Here’s where you can send your students a few email announcements
          every month. Use educational emails to support your students’
          learning. Use promotional emails to market your courses.
          <Link
            href="#"
            className="underline underline-offset-4 text-linkpurple"
          >
            Learn more
          </Link>
        </p>
      </Flex>
    </Flex>
  );
};

export default page;
