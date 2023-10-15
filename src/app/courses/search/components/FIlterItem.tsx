import Acordeon from "@/shared/UIComponents/Acordeon/Acordeon";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import Title from "@/shared/UIComponents/Texts/Title";
import ArrowDownIcon from "@/shared/UIComponents/icons/ArrowDownIcon";
import { useState } from "react";
import ContentOptions from "./ContentOptions";

const FIlterItem = ({ item, ...args }: any) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  return (
    <Acordeon
      headerComponent={
        <Flex
          full
          between
          className=" cursor-pointer py-4 border-t-1 border-0 border-solid border-gray-200"
        >
          <Title className="text-lg">{item.title}</Title>
          <ArrowDownIcon />
        </Flex>
      }
      {...args}
    >
      <div
        className={`${
          showFullDescription
            ? " full-no-collapsed "
            : "collapsed-showmore showmore-gradient-white"
        }`}
      >
        <Flex full col noitemscenter>
          {item.options.map((el2: any, index2: any) => {
            return <ContentOptions type={item.type} item={el2} key={index2} />;
          })}
        </Flex>
      </div>
      <button
        className="text-sm  flex items-center text-linkpurple font-bold"
        onClick={toggleDescription}
      >
        <span>{showFullDescription ? "Show less" : "Show more"}</span>
        <span>
          <ArrowDownIcon fill="#5624d0" />
        </span>
      </button>
    </Acordeon>
  );
};

export default FIlterItem;
