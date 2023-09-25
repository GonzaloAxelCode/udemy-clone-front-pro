import Button from "@/shared/UIComponents/Buttons/Button";
import Title from "@/shared/UIComponents/Texts/Title";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import PointIcon from "@/shared/UIComponents/icons/PointIcon";

import DislikeIcon from "@/shared/UIComponents/icons/DislikeIcon";
import ElipsisIcon from "@/shared/UIComponents/icons/ElipsisIcon";
import LikeIcon from "@/shared/UIComponents/icons/LikeIcon";
import UserImage from "@/shared/components/UserImage";
import _reviews_data from "./_reviews_data";
//@ts-ignore
import ReactStars from "react-stars";
const CourseRatingReviews = () => {
  return (
    <Flex col noItemsCenter>
      <Title className=" flex items-center mt-3 mb-8 text-2xl ">
        <span className="text-orange-400 mr-2">★</span>
        <span>4.6 course rating</span>
        <span>
          <PointIcon scale="0.7" />
        </span>
        <span>191K ratings</span>
      </Title>
      <Flex noItemsCenter full between className="flex-wrap">
        {_reviews_data.map((el: any, index: number) => {
          return (
            <Flex
              className="w-[45%] pt-6 pb-8 hr-top"
              col
              noItemsCenter
              key={index}
            >
              <Flex noItemsCenter full className="mb-5">
                <Flex full className="flex-grow">
                  <UserImage
                    inicial={el.iniciales}
                    className="w-[40px] h-[40px] mr-4"
                  />
                  <Flex col noItemsCenter>
                    <span className="text-base font-bold ">
                      {el.fullnameShortLastname}
                      <Flex>
                        <Flex className="space-x-1 mr-3">
                          <span>
                            <ReactStars
                              count={5}
                              size="15px"
                              char="★"
                              edit={false}
                              color1={"#f69c08"}
                              color2={"#f69c08"}
                            />
                          </span>
                        </Flex>
                        <span className="text-xs font-bold text-gray-400">
                          {el.createdPostFormatAgo}
                        </span>
                      </Flex>
                    </span>
                  </Flex>
                </Flex>
                <Flex justifyCenter>
                  <ElipsisIcon />
                </Flex>
              </Flex>
              <Flex col noItemsCenter full>
                <p className="text-base text-gray-400 mb-6">{el.description}</p>
                <Flex>
                  <span className="text-xs text-gray-300 mr-3">Helpful? </span>

                  <button className="mr-5">
                    <LikeIcon scale="0.9" />
                  </button>
                  <button>
                    <DislikeIcon scale="0.9" />
                  </button>
                </Flex>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <Flex>
        <Button variant="primary">Show all reviews</Button>
      </Flex>
    </Flex>
  );
};

export default CourseRatingReviews;
