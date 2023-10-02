import InputTexts from "@/shared/UIComponents/Inputs/InputTexts";
import ThreeLinesIcon from "@/shared/UIComponents/icons/ThreeLinesIcon";
import TrashIcon from "@/shared/UIComponents/icons/TrashIcon";
import { useState } from "react";
import {
    SortableContainer,
    SortableElement,
    SortableHandle,
} from "react-sortable-hoc";
export const DragHandle = SortableHandle(() => (
  <span className="flex cursor-move justify-center items-center cursor-move h-[50px] w-[50px] border-r-1 border-t-1 border-b-1 borderl-0 border-solid border-dark-100 hover:bg-gray-100">
    <span>
      <ThreeLinesIcon />
    </span>
  </span>
));
interface ItemProps {
  value: string;
  id: string;
  numorden: number;
  onDelete: any;
  onChange: any;
}

export const SortableItem = SortableElement<ItemProps>(
  ({ value, id, onDelete, onChange }: any) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="flex w-full items-center  "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <InputTexts
          place="Example: No programming experience needed. You will learn everything you need to know"
          value={value}
          name={id}
          variant="countstring"
          type="text"
          onChange={(e: any) => onChange(id, e.target.value)}
        />
        {isHovered && value !== "" ? (
          <>
            <span
              className="flex justify-center items-center h-[50px] w-[50px] border-r-1 border-t-1 border-b-1 borderl-0 border-solid border-dark-100 hover:bg-gray-100"
              onClick={() => onDelete(id)}
            >
              <span>
                <TrashIcon />
              </span>
            </span>
            <DragHandle />
          </>
        ) : (
          <>
            <span className="flex justify-center items-center h-[50px] w-[50px]  ">
              <span></span>
            </span>
            <span className="flex justify-center items-center h-[50px] w-[50px] ">
              <span></span>
            </span>
          </>
        )}
      </div>
    );
  }
);

export const SSortableContainer: any = SortableContainer(
  ({ children }: any) => {
    return (
      <div className="flex flex-col w-full space-y-4 max-w-[800px]">
        {children}
      </div>
    );
  }
);
