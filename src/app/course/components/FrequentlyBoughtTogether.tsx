import Button from "@/shared/UIComponents/Buttons/Button";
import Title from "@/shared/UIComponents/Texts/Title";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import HighestRated from "@/shared/UIComponents/others/HighestRated";
import Link from "next/link";
import _frequenty from "./_frequently-bought-together";
//@ts-ignore
import ReactStars from "react-stars";

const FrequentlyBoughtTogether = () => {
  return (
    <Flex full col noItemsCenter className="hr-full p-5 my-6">
      <Title className="mt-3 mb-2 text-2xl ">Students also bought </Title>
      <Flex full col noItemsCenter>
        {_frequenty.map((el: any, index: number) => {
          return (
            <Flex
              key={index}
              full
              noItemsCenter
              between
              className="justify-between py-4 "
            >
              <Flex w-full className="mr-2">
                <img src={el.image} className=" h-[112px] w-[200px]" />
              </Flex>
              <Flex full col noItemsCenter between className="max-w-[50%]">
                <span className="text-md font-bold text-dark-100  leading-4 ">
                  {el.title}
                </span>
                <span className="text-xs text-gray-300">{el.author}</span>

                <Flex col noItemsCenter className="space-x-2 items-center">
                  <Link href="#" className="flex space-x-2 items-center">
                    <Flex className="space-x-1">
                      <span className="text-orange-400 font-bold text-sm mt-1">
                        4.8
                      </span>
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
                    <span className="text-xs text-gray-300">
                      {" "}
                      ({el.numValoraciones})
                    </span>
                  </Link>
                  <HighestRated />
                </Flex>
              </Flex>
              <Flex className="space-x-3 flex-start ml-auto ">
                <Flex>
                  <span className="font-bold text-md">s/.{el.price}</span>
                </Flex>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <Flex full between>
        <Flex>
          <span className="text-lg text-gray-300 mr-2">Total: </span>
          <span className="text-lg font-bold"> S/749.70</span>
        </Flex>
        <Flex>
          <Button variant="purple" size="md">
            Add all to cart
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FrequentlyBoughtTogether;
