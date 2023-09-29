import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import Title from "@/shared/UIComponents/Texts/Title";
import PointIcon from "@/shared/UIComponents/icons/PointIcon";

import DislikeIcon from "@/shared/UIComponents/icons/DislikeIcon";
import ElipsisIcon from "@/shared/UIComponents/icons/ElipsisIcon";
import LikeIcon from "@/shared/UIComponents/icons/LikeIcon";
import UserImage from "@/shared/components/UserImage";
import _reviews_data from "@/shared/data/_reviews_data";
import ReactStars2 from "@/shared/lib/react-stars";
//dasd

const CourseRatingReviews = () => {
  return (
    <Flex col noitemscenter>
      <Title className=" flex items-center mt-3 mb-8 text-2xl ">
        <span className="text-orange-400 mr-2">★</span>
        <span>4.6 course rating</span>
        <span>
          <PointIcon scale="0.7" />
        </span>
        <span>191K ratings</span>
      </Title>
      <Flex noitemscenter full between className="flex-wrap">
        {_reviews_data.map((el: any, index: number) => {
          return (
            <Flex
              className="w-[46%] pt-6 pb-8 hr-top"
              col
              noitemscenter
              key={index}
            >
              <Flex noitemscenter full className="mb-5">
                <Flex full className="flex-grow">
                  <UserImage
                    inicial={el.iniciales}
                    className="w-[40px] h-[40px] mr-4"
                  />
                  <Flex col noitemscenter>
                    <span className="text-base font-bold ">
                      {el.fullnameShortLastname}
                      <Flex>
                        <Flex className="space-x-1 mr-3">
                          <span>
                            <ReactStars2
                              count={5}
                              size="15px"
                              char="★"
                              edit={false}
                              color1={"#b4690e"}
                              color2={"#b4690e"}
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
                <Flex justifycenter>
                  <ElipsisIcon />
                </Flex>
              </Flex>
              <Flex col noitemscenter full>
                <p className="text-base text-gray-500 mb-6 line-p">
                  {el.description}
                </p>
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
