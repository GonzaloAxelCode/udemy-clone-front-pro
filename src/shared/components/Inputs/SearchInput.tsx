import Flex from "../../UIComponents/CustomHTML/Flex";
import SearchIcon from "../../UIComponents/icons/SearchIcon";

const SearchInput = () => {
  return (
    <form>
      <Flex
        style={{ border: "1px solid gray" }}
        className="w-full  rounded-full  border-purple-100 h-[46px] mr-2 ml-2"
      >
        <Flex className="mx-4">
          <SearchIcon />
        </Flex>
        <Flex className="flex-grow">
          <input
            className="outline-none h-full ml-2 mr-4 text-sm w-full"
            type="text"
            placeholder="Search for anything"
          />
        </Flex>
      </Flex>
    </form>
  );
};

export default SearchInput;
