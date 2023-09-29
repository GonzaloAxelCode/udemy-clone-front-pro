"use client";

import Flex from "@/shared/UIComponents/CustomHTML/Flex";

const page = () => {
  return (
    <Flex full col noitemscenter>
      <h1 className=" text-4xl font-bold font-suisse-works">Q&A</h1>
      <Flex col full className="mt-10">
        <img
          src="https://s.udemycdn.com/communication/empty-mailbox-v2.jpg"
          className="m-auto"
        />
        <p className="text-lg font-bold tex-center">No questions yet</p>
        <p className="text-gray-300 text-center max-w-[440px] mt-4">
          Q&A is a forum where your students can ask questions, hear your
          responses, and respond to one another. Here’s where you’ll see your
          courses’ Q&A threads
        </p>
      </Flex>
    </Flex>
  );
};

export default page;
