const SearchInput = () => {
  return (
    <div
      style={{ border: "1px solid " }}
      className="flex  items-center w-full rounded-full  border-purple-100 h-[46px]"
    >
      <input
        className="outline-none ml-5 mr-4"
        type="text"
        placeholder="Search for anything"
      />
    </div>
  );
};

export default SearchInput;
