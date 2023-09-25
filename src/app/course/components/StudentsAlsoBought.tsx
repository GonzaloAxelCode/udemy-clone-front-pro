import Button from "@/shared/UIComponents/Buttons/Button";
import Title from "@/shared/UIComponents/Texts/Title";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import HeartIcon from "@/shared/UIComponents/icons/HeartIcon";

import PeopleIcon from "@/shared/UIComponents/icons/PeopleIcon";
import _bought_courses from "./_boughtcourses";
const StudentsAlsoBought = () => {
  return (
    <Flex>
      <Flex full col noItemsCenter>
        <Title className="mt-3 mb-2 text-2xl ">Students also bought </Title>
        <Flex col noItemsCenter full>
          {_bought_courses.map((el: any, index: number) => {
            return (
              <Flex
                key={index}
                full
                noItemsCenter
                between
                className="justify-between py-4 hr-bottom"
              >
                <Flex w-full className="mr-2">
                  <img src={el.image} width={64} height={64} />
                </Flex>
                <Flex col noItemsCenter between className="max-w-[50%]">
                  <span className="text-md font-bold text-dark-100  leading-4 ">
                    {el.title}
                  </span>
                  <span className="text-sm mt-3">
                    <span className="font-bold text-green-400">
                      {el.hours} total hours
                    </span>
                    <span className="text-gray-400"> &middot; </span>
                    <span className="text-gray-400 mt-auto">
                      Updated {el.dataUpdated}
                    </span>
                  </span>
                </Flex>
                <Flex className="space-x-3 flex-end ml-auto ">
                  <Flex full className="space-x-1">
                    <span className="text-orange-300 font-bold text-sm mt-1">
                      {el.raiting}
                    </span>
                    <span></span>
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
                  <Button extendClass="rounded-full" variant="primary">
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
