import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import CouponIcon from "@/shared/UIComponents/icons/CouponIcon";
import InsightIcon from "@/shared/UIComponents/icons/InsightIcon";
import VideoIcon from "@/shared/UIComponents/icons/VideoIcon";
import Link from "next/link";

const _data_tools = [
  {
    path: "#",
    name: "Test Video",
    icon: <VideoIcon scale="2" />,
    description:
      "Get free feedback from Udemy video experts on your audio, video, and delivery.",
    learnMorePath: "#",
  },
  {
    path: "#",
    name: "Marketplace Insights",
    icon: <InsightIcon scale="2" />,
    description: "Get Udemy-wide market data to create successful courses",
    learnMorePath: "#",
  },
  {
    path: "#",
    name: "Bulk coupon creation",
    icon: <CouponIcon scale="2" />,
    description: "Create multiple coupons at once via CSV upload.",
    learnMorePath: "#",
  },
];

const page = () => {
  return (
    <Flex full col noitemscenter className="mt-8 ">
      <h1 className=" text-4xl font-bold font-suisse-works">Tools</h1>
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
