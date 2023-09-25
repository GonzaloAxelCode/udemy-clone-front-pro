import Title from "@/shared/UIComponents/Texts/Title";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import CheckIcon from "@/shared/UIComponents/icons/CheckIcon";
const listaLearn = [
  { text: "What a target market is and what it means for your business" },
  { text: "Who your target market is" },
  { text: "Why your customers buy from you" },
  { text: "The difference between sales and marketing" },
  { text: "How to best reach your ideal customer/target market" },
  { text: "The objectives of your website" },
  {
    text: "What Search Engine Optimization is and how it can benefit your website",
  },
  { text: "How analytic software can help your website" },
  { text: "How to get traffic to your website and keep them coming back" },
];

const WhatYouLearn = () => {
  return (
    <Flex
      col
      noItemsCenter
      className="m-auto w-full p-4 border-solid border-1 border-gray-200 "
    >
      <Title className="text-2xl px-2 py-3">What youll learn</Title>
      <Flex noItemsCenter>
        <Flex col noItemsCenter>
          {listaLearn.slice(0, 5).map((el: any, index: number) => {
            return (
              <div key={index} className="space-x-3 flex py-1">
                <span className="px-1">
                  <CheckIcon scale="0.7" />
                </span>
                <div className="flex ">
                  <span className="text-sm text-gray-400">{el.text}</span>
                </div>
              </div>
            );
          })}
        </Flex>
        <Flex col noItemsCenter>
          {listaLearn.slice(5).map((el: any, index: number) => {
            return (
              <div key={index} className="space-x-3 flex py-1">
                <span className="px-1">
                  <CheckIcon scale="0.7" />
                </span>
                <div className="flex">
                  <span className="text-sm text-gray-400">{el.text}</span>
                </div>
              </div>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default WhatYouLearn;
