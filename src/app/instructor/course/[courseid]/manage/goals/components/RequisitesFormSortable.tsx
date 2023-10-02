

import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import P from "@/shared/UIComponents/CustomHTML/P";
import PlusPurpleIcon from "@/shared/UIComponents/icons/PlusPurpleIcon";
import useSortableForm from "@/shared/hooks/useSortableForm";
import { SSortableContainer, SortableItem } from "./SortableComponents";

function RequisitesFormSortable() {
  const {
    form,
    items,
    onSortEnd,
    addNewItem,
    onDeleteItem,
    handleInputChange,
  } = useSortableForm([]);

  return (
    <Flex col full noitemscenter className="Sortable-container">
      <SSortableContainer
        onSortEnd={onSortEnd} useDragHandle>
        {items.map((item:any, index:any) => (
          <SortableItem
            key={item.id}
            index={index}
            value={form[item.id]?.value || item.value}
            id={item.id}
            numorden={item.numorden}
            onDelete={onDeleteItem}
            onChange={handleInputChange}
          />
        ))}
      </SSortableContainer>
      <button className="h-[48px] flex items-center space-x-3 text-linkpurple mt-3" onClick={addNewItem}>
        <PlusPurpleIcon />
        <P bold>Add more to your response</P>
      </button>
      
    </Flex>
  );
}

export default RequisitesFormSortable;