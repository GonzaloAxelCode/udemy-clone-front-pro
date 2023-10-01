import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import InputTexts from "@/shared/UIComponents/Inputs/InputTexts";
import ThreeLinesIcon from "@/shared/UIComponents/icons/ThreeLinesIcon";
import { arrayMoveImmutable } from "array-move";
import React, { useState } from "react";
import {
    SortableContainer,
    SortableElement,
    SortableHandle,
} from "react-sortable-hoc";

const DragHandle = SortableHandle(() => (
  <span className=" flex w-full justify-center items-center cursor-move h-[50px] w-[50px] border-r-1 border-t-1 border-b-1 borderl-0 border-solid border-dark-100 hover:bg-gray-100 ">
    <span>
      <ThreeLinesIcon />
    </span>
  </span>
));

interface ItemProps {
  value: string;
}

const SortableItem = SortableElement<ItemProps>(({ value }: any) => (
  <div className="flex w-full items-center ">
    {value}

    <DragHandle />
  </div>
));

const SSortableContainer: any = SortableContainer(({ children }: any) => {
  return (
    <div className="flex flex-col w-full space-y-4 max-w-[706px]">
      {children}
    </div>
  );
});

const GoalsFormSortable: React.FC = () => {
  const [form, setForm] = useState({
    goal1: "",
    goal2: "",
    goal3: "",
    goal4: "",
    goal5: "",
    goal6: "",
  });
  const onChange = (e: any, valid: boolean = true) => {
    setForm({ ...form, [e.target.name]: valid ? e.target.value : "" });
    console.log(form);
  };

  const [items, setItems] = useState<any>([
    <div className="w-full" key={1}>
      <InputTexts
        place=""
        value={form.goal1}
        name="goal1"
        variant="countstring"
        type="text"
        onChange={onChange}
      />
    </div>,
    <div className="w-full" key={2}>
      <InputTexts
        place=""
        value={form.goal2}
        name="goal2"
        variant="countstring"
        type="text"
        onChange={onChange}
      />
    </div>,
    <div className="w-full" key={3}>
      <InputTexts
        place=""
        value={form.goal3}
        name="goal3"
        variant="countstring"
        type="text"
        onChange={onChange}
      />
    </div>,
    <div className="w-full" key={4}>
      <InputTexts
        place=""
        value={form.goal4}
        name="goal4"
        variant="countstring"
        type="text"
        onChange={onChange}
      />
    </div>,
    <div className="w-full" key={5}>
      <InputTexts
        place=""
        value={form.goal5}
        name="goal5"
        variant="countstring"
        type="text"
        onChange={onChange}
      />
    </div>,
    <div className="w-full" key={6}>
      <InputTexts
        place=""
        value={form.goal6}
        name="goal6"
        variant="countstring"
        type="text"
        onChange={onChange}
      />
    </div>,
  ]);

  const onSortEnd = ({
    oldIndex,
    newIndex,
  }: {
    oldIndex: number;
    newIndex: number;
  }) => {
    setItems((prevItems: any) =>
      arrayMoveImmutable(prevItems, oldIndex, newIndex)
    );
  };

  return (
    <Flex full noitemscenter className="Sortable-container">
      <SSortableContainer onSortEnd={onSortEnd} useDragHandle>
        {items.map((value: any, index: any) => (
          <SortableItem key={index} index={index} value={value} />
        ))}
      </SSortableContainer>
    </Flex>
  );
};

export default GoalsFormSortable;
