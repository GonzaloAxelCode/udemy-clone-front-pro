"use client";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import P from "@/shared/UIComponents/CustomHTML/P";
import Link from "next/link";

const InstructorResources = () => {
  return (
    <Flex col noitemscenter full className="gap-6">
      <Flex
        stretch
        className="px-12 flex-col md2:flex-row py-4 hr-full shadow-lg"
      >
        <Flex justifycenter full className="flex-2 ">
          <img
            width={210}
            height={210}
            className="mx-auto"
            src="https://s.udemycdn.com/instructor/dashboard/engaging-course.jpg"
            alt=""
          />
        </Flex>

        <Flex between col noitemscenter className="flex-3 pt-4 space-y-5">
          <P className="text-2xl">Create an Engaging Course</P>
          <P>
            Whether youve been teaching for years or are teaching for the first
            time, you can make an engaging course. Weve compiled resources and
            best practices to help you get to the next level, no matter where
            youre starting.
          </P>

          <Link
            href="#"
            className="underline underline-offset-2 text-linkpurple"
          >
            Get Started
          </Link>
        </Flex>
      </Flex>

      <div className="flex w-full gap-6 flex-col  md2:flex-row  flex-row ">
        <Flex
          full
          stretch
          className="px-12 flex-col md2:flex-row py-4 hr-full shadow-lg"
        >
          <Flex justifycenter full className="flex-2 ">
            <img
              width={210}
              height={210}
              className="mx-auto"
              src="https://s.udemycdn.com/instructor/dashboard/video-creation.jpg"
              alt=""
            />
          </Flex>

          <Flex between col noitemscenter className="flex-3 pt-4 space-y-5">
            <P className="text-2xl">Get Started with Video</P>
            <P>
              Quality video lectures can set your course apart. Use our
              resources to learn the basics.
            </P>

            <Link
              href="#"
              className="underline underline-offset-2 text-linkpurple"
            >
              Get Started
            </Link>
          </Flex>
        </Flex>
        <Flex
          full
          stretch
          className="px-12 flex-col md2:flex-row py-4 hr-full shadow-lg"
        >
          <Flex justifycenter full className="flex-2 ">
            <img
              width={210}
              height={210}
              className="mx-auto"
              src="https://s.udemycdn.com/instructor/dashboard/build-audience.jpg"
              alt=""
            />
          </Flex>

          <Flex between col noitemscenter className="flex-3 pt-4 space-y-5">
            <P className="text-2xl">Build Your Audience</P>
            <P>Set your course up for success by building your audience.</P>

            <Link
              href="#"
              className="underline underline-offset-2 text-linkpurple"
            >
              Get Started
            </Link>
          </Flex>
        </Flex>
      </div>

      <Flex
        stretch
        className="px-12 flex-col md2:flex-row py-4 hr-full shadow-lg"
      >
        <Flex justifycenter full className="flex-2 ">
          <img
            width={210}
            height={210}
            className="mx-auto"
            src="https://s.udemycdn.com/instructor/dashboard/newcomer-challenge.jpg"
            alt=""
          />
        </Flex>

        <Flex between col noitemscenter className="flex-3 pt-4 space-y-5">
          <P className="text-2xl">Join the New Instructor Challenge!</P>
          <P>
            Get exclusive tips and resources designed to help you launch your
            first course faster! Eligible instructors who publish their first
            course on time will receive a special bonus to celebrate. Start
            today!
          </P>

          <Link
            href="#"
            className="underline underline-offset-2 text-linkpurple"
          >
            Get Started
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InstructorResources;
