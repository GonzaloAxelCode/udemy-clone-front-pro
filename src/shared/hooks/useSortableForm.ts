import { arrayMoveImmutable } from "array-move";
import { useEffect, useState } from "react";
// Define el custom hook
function useSortableForm(initialElements = []) {
  const [form, setForm] = useState<any>({});
  const [items, setItems] = useState<any>(initialElements);
  const [elementCount, setElementCount] = useState(0);
  const [changeValue, setChangeValue] = useState(false);

  useEffect(() => {
    addNewItem();
  }, []);

  useEffect(() => {
    const updatedForm: any = {};
    items.forEach((item: any, index: any) => {
      updatedForm[item.id] = {
        value: form[item.id]?.value || item.value,
        numorden: index + 1,
      };
    });
    setForm(updatedForm);
  }, [items, setForm, elementCount, changeValue]);

  const onSortEnd = ({ oldIndex, newIndex }: any) => {
    setItems((prevItems: any) =>
      arrayMoveImmutable(prevItems, oldIndex, newIndex)
    );
    setChangeValue(!changeValue);
  };

  const addNewItem = () => {
    const newItemId = `goal${elementCount + 1}`;
    const newItem = {
      id: newItemId,
      value: "",
      numorden: elementCount + 1,
    };

    const insertIndex = items.findIndex((item: any) => item.id > newItemId);

    if (insertIndex === -1) {
      setItems((prevItems: any) => [...prevItems, newItem]);
    } else {
      setItems((prevItems: any) => [
        ...prevItems.slice(0, insertIndex),
        newItem,
        ...prevItems.slice(insertIndex),
      ]);
    }

    setElementCount(elementCount + 1);
    setChangeValue(!changeValue);
  };

  const onDeleteItem = (id: any) => {
    const updatedItems = items.filter((item: any) => item.id !== id);
    setItems(updatedItems);
    setChangeValue(!changeValue);
  };

  const handleInputChange = (id: any, value: any) => {
    setForm({
      ...form,
      [id]: {
        value,
        numorden: form[id]?.numorden || 0,
      },
    });
    setChangeValue(!changeValue);
  };

  return {
    form,
    items,
    onSortEnd,
    addNewItem,
    onDeleteItem,
    handleInputChange,
  };
}

export default useSortableForm;
