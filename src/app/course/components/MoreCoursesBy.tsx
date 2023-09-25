import Button from "@/shared/UIComponents/Buttons/Button";
import Title from "@/shared/UIComponents/Texts/Title";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import ReactStars from "@/shared/lib/react-stars";
import Link from "next/link";
import _frequenty from "./_frequently-bought-together";

const MoreCoursesBy = () => {
  return (
    <Flex col noItemsCenter>
      <Title className=" flex items-center mt-6 mb-2 text-2xl ">
        More Courses by{" "}
        <Link className="text-linkpurple ml-2" href="#">
          Angular University
        </Link>
      </Title>

      <Flex noItemsCenter between className="space-x-2 mb-8 ">
        {_frequenty.map((el: any, index: number) => {
          return (
            <Flex
              key={index}
              full
              noItemsCenter
              between
              col
              className="justify-between py-4 "
            >
              <Flex w-full className="mr-2">
                <img src={el.image} className=" h-[112px] w-[200px]" />
              </Flex>
              <Flex full col noItemsCenter between>
                <span className="text-md font-bold text-dark-100 mt-3 leading-4 ">
                  {el.title}
                </span>
                <span className="text-xs text-gray-300">{el.author}</span>

                <Flex col noItemsCenter className="space-x-2 items-center">
                  <Link href="#" className="flex space-x-2 items-center">
                    <Flex className="space-x-1">
                      <span className="text-orange-500 font-bold text-sm mt-1">
                        4.8
                      </span>
                      <span>
                        <ReactStars
                          count={5}
                          size="15px"
                          char="★"
                          edit={false}
                          color1={"#b4690e"}
                          color2={"#b4690e"}
                        />
                      </span>
                    </Flex>
                    <span className="text-xs text-gray-300">
                      {" "}
                      ({el.numValoraciones})
                    </span>
                  </Link>
                </Flex>
              </Flex>
              <span className="text-xs text-gray-300">
                {" "}
                {el.hours} total hours &middot; 46 lectures <br />
                &middot; all levels
              </span>
              <Flex className="space-x-3  mr-auto ">
                <span className="font-bold text-md">s/.{el.price}</span>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <Flex full className="hr-top">
        <Button variant="primary" extendClass="w-full mt-4">
          Report abuse
        </Button>
      </Flex>
    </Flex>
  );
};

export default MoreCoursesBy;
