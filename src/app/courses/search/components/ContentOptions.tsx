import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import ReactStars2 from "@/shared/lib/react-stars";

const ContentOptions = ({ item, type, ...args }: any) => {
  return (
    <Flex full className="space-x-2 py-2 collapsed-description" {...args}>
      {item.type ? (
        <span className="flex space-x-2 ml-2">
          <input
            className="cursor-pointer"
            type="radio"
            style={{
              scale: "1.2",
            }}
            name={item.value}
          />
          <ReactStars2 count={item.value} />
        </span>
      ) : (
        <input
          style={{
            scale: "0.8",
          }}
          className=""
          type="checkbox"
          name={item.value}
        />
      )}

      <span className="text-gray-400 text-sm">{item.label}</span>
      {item.count && (
        <span className="text-gray-400 text-sm">({item.count})</span>
      )}
    </Flex>
  );
};

export default ContentOptions;
