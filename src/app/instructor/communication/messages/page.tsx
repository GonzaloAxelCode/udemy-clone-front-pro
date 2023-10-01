"use client";

import Flex from "@/shared/UIComponents/CustomHTML/Flex";

const page = () => {
  return (
    <Flex full col noitemscenter className="flex-grow">
      <h1 className=" text-4xl font-bold font-suisse-works">Messages</h1>
      <Flex col full justifycenter className="mt-10 mx-auto">
        <img
          src="https://s.udemycdn.com/communication/empty-mailbox-v2.jpg"
          className="m-auto"
        />
        <p className="text-lg font-bold tex-center">No new messages</p>
        <p className="text-gray-300 text-center max-w-[440px] mt-4">
          Direct messages are for you to communicate with your students or other
          instructors privately. Here’s where you’ll see them.
        </p>
      </Flex>
    </Flex>
  );
};

export default page;
