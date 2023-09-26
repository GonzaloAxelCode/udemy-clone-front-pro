import CarruselSimple from "@/shared/UIComponents/Carrusels/CarruselSimple";
import Title from "@/shared/UIComponents/Texts/Title";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import categorias from "@/shared/components/Navbar/_data_categories";

import Carousel from "better-react-carousel";
import Link from "next/link";
const TopicsRecommendedForYou = () => {
  return (
    <Flex col noItemsCenter>
      <Title className=" mt-3 mb-1 text-2xl ">
        <span>Topics recommended for you</span>
      </Title>
      <Flex full className="my-2">
        <CarruselSimple gap={10} rows={2} buttonsCenter>
          {categorias.map((el: any, index: number) => {
            return (
              <Carousel.Item className="" key={index}>
                <Flex
                  full
                  justifyCenter
                  className="w-[200px] h-[56px] hr-full font-bold hover:bg-gray-100"
                >
                  <Link
                    href="#"
                    className="flex items-center justify-center text-center text-xs md:text-sm w-full h-full"
                  >
                    <span>{el.text}</span>
                  </Link>
                </Flex>
              </Carousel.Item>
            );
          })}
        </CarruselSimple>
      </Flex>
    </Flex>
  );
};

export default TopicsRecommendedForYou;
