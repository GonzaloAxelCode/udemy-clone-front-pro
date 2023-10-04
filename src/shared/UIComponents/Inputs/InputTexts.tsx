import { useState } from "react";
import { cn } from "tailwind-cn";
import Button from "../Buttons/Button";
import Flex from "../CustomHTML/Flex";
import SearchWhiteIcon from "../icons/SearchWhiteIcon";

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
  size?: "sm" | "md" | "xl";
}

const InputTexts = ({
  size = "md",
  limit = 80,
  place = "Generic Place",
  value,
  variant = "normal",
  onChange,
  type = "text",
  name = "Generic name",
  disable = false,
  label,
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
    <Flex
      full
      col
      noitemscenter
      className={cn(size === "sm" && "text-sm", "relative z-1")}
    >
      {label && (
        <span className="mb-1 font-bold text-gray-400 text-sm">{label}</span>
      )}
      <div className="flex items-center w-full border-1 border-gray-500 border-solid relative z-1">
        {variant === "prevvalue" && (
          <Flex
            className={cn(
              "bg-gray-100 border-r-1 border-gray-500 border-solid px-3",
              size === "md" && " h-[48px]",
              size === "sm" && " h-[34px]"
            )}
          >
            http://www.twitter.com/
          </Flex>
        )}
        <input
          className={cn(
            disable && " cursor-no-drop cursor-not-allowed",
            " w-[94%] focus:outline-none px-4  relative z-1",
            size === "md" && " h-[48px]",
            size === "sm" && " h-[34px]",
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
          <Flex className="absolute right-4 bg-white top-1/2 transform -translate-y-1/2 z-5">
            {countString}
          </Flex>
        )}
        {variant === "search" && (
          <Button
            size="md"
            extendClass={cn(
              size === "md" && "w-[48px] w-[48px]",
              size === "sm" && "w-[34px] w-[34px]"
            )}
            variant="secondary"
          >
            <SearchWhiteIcon />
          </Button>
        )}
      </div>
    </Flex>
  );
};

export default InputTexts;
