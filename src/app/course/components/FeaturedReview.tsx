import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import Title from "@/shared/UIComponents/Texts/Title";
import DislikeIcon from "@/shared/UIComponents/icons/DislikeIcon";
import LikeIcon from "@/shared/UIComponents/icons/LikeIcon";
import ReactStars2 from "@/shared/lib/react-stars";
import Link from "next/link";
const FeaturedReview = () => {
  return (
    <Flex col noitemscenter className="p-6 hr-full mb-6 mt-6">
      <Title className="mb-3     text-2xl ">Featured review</Title>

      <Flex col noitemscenter>
        <Flex w-full className="mr-2">
          <img
            src="https://img-b.udemycdn.com/user/200_H/496695_ce1e_2.jpg"
            className="mr-4 rounded-full  object-cover h-[64px] w-[64px]"
          />

          <Flex col noitemscenter>
            <span className="text-base font-bold ">Adrián D.</span>

            <Flex col noitemscenter>
              <span className="text-sm text-gray-400">333 courses</span>
              <span className="text-sm text-gray-400">15 reviews</span>
            </Flex>
          </Flex>
        </Flex>
        <Flex col noitemscenter className="space-x-1 mr-3">
          <Flex>
            <ReactStars2
              count={5}
              size={23}
              char="★"
              edit={false}
              color1={"#b4690e"}
              color2={"#b4690e"}
            />
            <span className="text-sm text-gray-300  ml-2">3 tahun lalu</span>
          </Flex>
          <div
            style={{
              lineHeight: "1.4rem",
            }}
            className="text-sm w-full mb-6 text-gray-400"
          >
            Ive watched other courses about Angular and this is definitively the
            only one which covers the framework in DEPTH. This is the starting
            point for experienced programmers. Your time will not be wasted with
            basic explanations about programming concepts.
          </div>
          <span className="text-xs text-gray-300 mb-2">
            Was this review helpful?
          </span>
          <Flex className="">
            <Button extendClass="rounded-full mr-2" variant="primary">
              <LikeIcon scale="0.8" />
            </Button>
            <Button
              extendClass="rounded-full w-[40px] h-[40px] mr-4"
              variant="primary"
            >
              <DislikeIcon scale="0.8" />
            </Button>
            <Link className="text-sm underline " href="#">
              Report
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FeaturedReview;
