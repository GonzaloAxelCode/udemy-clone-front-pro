import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import CommunityIcon from "@/shared/UIComponents/icons/CommunityIcon";
import HelpIcon from "@/shared/UIComponents/icons/HelpIcon";
import TeacherIcon from "@/shared/UIComponents/icons/TeacherIcon";
import Link from "next/link";

const _data_tools = [
  {
    path: "#",
    name: "Teaching Center",
    icon: <TeacherIcon scale="2" />,
    description:
      "Find articles on Udemy teaching — from course creation to marketing.",
    learnMorePath: "#",
  },
  {
    path: "#",
    name: "Instructor Community",
    icon: <CommunityIcon scale="2" />,
    description:
      "Share your progress and ask other instructors questions in our community.",
    learnMorePath: "#",
  },
  {
    path: "#",
    name: "Help and Support",
    icon: <HelpIcon scale="2" />,
    description: "Can’t find what you need? Our support team is happy to help.",
    learnMorePath: "#",
  },
];

const page = () => {
  return (
    <Flex full col noitemscenter className="mt-8 ">
      <h1 className=" text-4xl font-bold font-suisse-works">Resources</h1>
      <Flex col full className="mt-3">
        <Flex
          hfull
          stretch
          noitemscenter
          className="gap-10 flex-grow flex-wrap"
        >
          {_data_tools.map((el: any, index: number) => {
            return (
              <Flex
                justifycenter
                key={index}
                className="hr-full min-w-[366px] flex-grow hover:bg-gray-100 flex-1"
              >
                <Link href={el.path}>
                  <Flex
                    hfull
                    col
                    between
                    justifycenter
                    className=" px-10 py-12 flex-grow"
                  >
                    <div className="mt-4">{el.icon}</div>
                    <h2 className="font-bold text-md text-dark-100 mt-6">
                      {el.name}
                    </h2>
                    <p className="inline text-sm text-gray-300 px-10 text-center max-w-[440px] mt-4">
                      {el.description}
                    </p>
                  </Flex>
                </Link>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default page;
