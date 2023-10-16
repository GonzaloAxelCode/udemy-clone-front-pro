"use client";
import { useState } from "react";
import Flex from "../../UIComponents/CustomHTML/Flex";
import SearchIcon from "../../UIComponents/icons/SearchIcon";

import { useRouter } from "next/navigation";

const SearchInput = () => {
  const [value, setValue] = useState("");

  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/courses/search?src=ukw&q=${encodeURIComponent(value)}`); // Navigate to the search page
  };
  return (
    <Flex
      full
      style={{ border: "1px solid gray" }}
      className="w-full  rounded-full  border-purple-100 h-[46px] mr-2 ml-2"
    >
      <Flex className="mx-4">
        <SearchIcon />
      </Flex>
      <Flex className="flex-grow">
        <form onSubmit={handleSubmit}>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="outline-none h-full ml-2 mr-4 text-sm w-full"
            type="text"
            placeholder="Search for anything"
          />
        </form>
      </Flex>
    </Flex>
  );
};

export default SearchInput;
