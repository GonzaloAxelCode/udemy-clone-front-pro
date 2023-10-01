import Flex from "../CustomHTML/Flex";

const Select = ({ label, name, onChange, value, options }: any) => {
  return (
    <Flex col full noitemscenter className="relative">
      <span className="mb-1 font-bold text-gray-400 text-sm">{label}</span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className=" appearance-none block w-full h-12 px-4 py-2 border border-dark-100  text-base bg-white hover:bg-gray-100 cursor-pointer text-gray-700 focus:outline-none focus:border-blue-500 "
      >
        {options.map((option: any, index: any) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center top-7 justify-center pr-2 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </Flex>
  );
};

export default Select;
