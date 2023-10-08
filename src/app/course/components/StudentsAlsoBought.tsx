import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import Title from "@/shared/UIComponents/Texts/Title";
import HeartIcon from "@/shared/UIComponents/icons/HeartIcon";

import PeopleIcon from "@/shared/UIComponents/icons/PeopleIcon";
import HighestRated from "@/shared/UIComponents/others/HighestRated";
import _bought_courses from "@/shared/data/_boughtcourses";
import ReactStars2 from "@/shared/lib/react-stars";
const StudentsAlsoBought = () => {
  return (
    <Flex>
      <Flex full col noitemscenter>
        <Title className="mt-3 mb-2 text-2xl ">Students also bought </Title>
        <Flex col noitemscenter full>
          {_bought_courses.map((el: any, index: number) => {
            return (
              <Flex
                key={index}
                full
                noitemscenter
                between
                className="justify-between py-4 hr-bottom"
              >
                <Flex  className="mr-2">
                  <img src={el.image} width={64} height={64} />
                </Flex>
                <Flex full col noitemscenter between className="max-w-[50%]">
                  <span className="text-md font-bold text-dark-100  leading-4 ">
                    {el.title}
                  </span>
                  <span className="w-full text-sm mt-3">
                    <Flex
                      full
                      className="font-bold text-green-400 space-x-1 flex-grow"
                    >
                      <span>
                        {el.betSeller && <HighestRated text="Bestseller" />}
                      </span>
                      <span>{el.hours} total hours</span>

                      <span className="text-gray-400"> &middot; </span>
                      <span className="text-gray-400 font-normal mt-auto">
                        Updated {el.dataUpdated}
                      </span>
                    </Flex>
                  </span>
                </Flex>
                <Flex className="space-x-3 flex-start ml-auto ">
                  <Flex full className="space-x-1">
                    <span className="text-orange-400 font-bold text-sm mt-1">
                      {el.raiting}
                    </span>
                    <span>
                      <ReactStars2
                        count={1}
                        size={20}
                        char="★"
                        edit={false}
                        color1={"#b4690e"}
                        color2={"#b4690e"}
                      />
                    </span>
                  </Flex>
                  <Flex>
                    <PeopleIcon scale="0.65" />
                    <span className="text-sm">{el.peoples}</span>
                  </Flex>
                  <Flex>
                    <span className="font-bold text-sm">s/.{el.price}</span>
                  </Flex>
                </Flex>
                <Flex className="flex-end ml-auto ">
                  <Button
                    extendClass="rounded-full w-[40px] h-[40px]"
                    variant="primary"
                  >
                    <HeartIcon scale="0.8" />
                  </Button>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
        <Button variant="primary" extendClass="w-full mt-4">
          Show more
        </Button>
      </Flex>
    </Flex>
  );
};

export default StudentsAlsoBought;
