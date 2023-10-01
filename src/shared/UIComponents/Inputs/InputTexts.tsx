import { useState } from "react";
import { cn } from "tailwind-cn";
import Flex from "../CustomHTML/Flex";

interface Props {
  place?: string;
  label?: string;
  name?: string;
  value?: any;
  disable?: any;
  type?: string;
  variant?: string;
  onChange?: any;
  className?: string;
  limit?: number;
  prevValue?: string;
}

const InputTexts = ({
  limit = 80,
  place = "Generic Place",
  value,
  variant = "normal",
  onChange,
  type = "text",
  name = "Generic name",
  disable = false,
  label = "Generic label",
  prevValue = "http://www.twitter.com/",
  className = "",
}: Props) => {
  const [countString, setCountString] = useState(limit);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (variant === "prevvalue") {
      onChange(event);
    } else if (variant === "normal") {
      onChange(event);
    } else {
      const inputValue = event.target.value;
      const remainingChars = limit - inputValue.length;

      if (remainingChars >= 0) {
        setCountString(remainingChars);
        onChange(event);
      }
    }
  };
  return (
    <Flex full col noitemscenter className="relative z-1">
      <span className="mb-1 font-bold text-gray-400 text-sm">{label}</span>
      <div className="flex items-center w-full border-1 border-gray-500 border-solid relative z-1">
        {variant === "prevvalue" && (
          <Flex className="bg-gray-100 border-r-1 border-gray-500 border-solid px-3 h-[48px]">
            http://www.twitter.com/
          </Flex>
        )}
        <input
          className={cn(
            disable && " cursor-no-drop cursor-not-allowed",
            " w-[94%] focus:outline-none px-4 h-[48px]  relative z-1",
            className
          )}
          placeholder={place}
          disabled={disable}
          value={value}
          type={type}
          onChange={handleInputChange}
          name={name}
        />
        {variant === "countstring" && (
          <Flex className="absolute right-4 bg-white  top-3 z-5">
            {countString}
          </Flex>
        )}
      </div>
    </Flex>
  );
};

export default InputTexts;
