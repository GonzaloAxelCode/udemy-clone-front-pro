import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import styled from "styled-components";

const StyledBlockWrapper = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  border-radius: 4px;
  cursor: move;
  &:hover {
    //background: #eeeeee;
  }
`;

const sortableOptions = {
  animation: 150,
  fallbackOnBody: true,
  swapThreshold: 0.65,
  ghostClass: "ghost",
};

const containerSortableOptions = {
  group: "container",
};

const elementSortableOptions = {
  group: "element",
};

export default function App() {
  const [blocks, setBlocks] = useState([
    {
      id: 1,
      content: "Section 1",
      parent_id: null,
      type: "container",
      children: [
        {
          id: 2,
          content: "item 2",
          width: 3,
          type: "text",
          parent_id: 1,
        },
        {
          id: 3,
          content: "item 3",
          width: 3,
          type: "text",
          parent_id: 1,
        },
      ],
    },
    {
      id: 4,
      content: "Section 2",
      parent_id: null,
      type: "container",
      children: [
        {
          id: 5,
          content: "item 5",
          width: 3,
          parent_id: 2,
        },
        {
          id: 6,
          content: "item 6",
          width: 2,
          type: "text",
          parent_id: 2,
        },
        {
          id: 7,
          content: "item 7",
          width: 2,
          type: "text",
          parent_id: 2,
        },
      ],
    },
  ]);
  const createContainer = () => {
    // Crea un nuevo elemento de tipo "container" y agrega al estado "blocks"
    const newContainer = {
      id: blocks.length + 1, // Asigna un nuevo ID único
      content: `Section ${blocks.length + 1}`,
      parent_id: null,
      type: "container",
      children: [],
    };
    setBlocks((prevBlocks) => [...prevBlocks, newContainer]);
  };

  return (
    <div>
      <ReactSortable list={blocks} setList={setBlocks} {...sortableOptions}>
        {blocks.map((block, blockIndex) => (
          <BlockWrapper
            key={block.id}
            block={block}
            blocks={blocks}
            blockIndex={[blockIndex]}
            setBlocks={setBlocks}
          />
        ))}
      </ReactSortable>
      <button onClick={createContainer}>Crear Nuevo Contenedor</button>
    </div>
  );
}

function Container({ block, blockIndex, setBlocks, blocks }) {
  const handleDeleteContainer = () => {
    setBlocks((prevBlocks) => {
      const updatedBlocks = [...prevBlocks];
      const currentIndex = blockIndex[blockIndex.length - 1];
      updatedBlocks.splice(currentIndex, 1);
      if (currentIndex > 0) {
        const previousIndex = currentIndex - 1;
        const previousContainer = updatedBlocks[previousIndex];
        previousContainer.children = previousContainer.children.concat(
          block.children
        );
      }
      return updatedBlocks;
    });
  };

  const [isAddingItem, setIsAddingItem] = useState(false);

  const handleAddItem = () => {
    // Crea un nuevo elemento dentro del contenedor actual
    const newItem = {
      id:
        Math.max(
          ...(blocks?.flatMap((block) =>
            block.children.map((child) => child.id)
          ) ?? [0]), // Si blocks es undefined o no tiene elementos, se inicializa con [0]
          0
        ) + 1,
      content: `Nuevo Item ${
        Math.max(
          ...(blocks?.flatMap((block) =>
            block.children.map((child) => child.id)
          ) ?? [0]),
          0
        ) + 1
      }`,
      parent_id: block.id,
      type: "text",
      width: 3, // Puedes ajustar esto según tus necesidades
    };

    setBlocks((prevBlocks) => {
      const updatedBlocks = [...prevBlocks];
      const currentIndex = blockIndex[blockIndex.length - 1];

      // Verifica si el nuevo elemento ya existe en todos los elementos de todos los contenedores
      const isDuplicate = blocks.some((otherBlock) =>
        otherBlock.children.some((child) => child.content === newItem.content)
      );

      if (!isDuplicate) {
        updatedBlocks[currentIndex].children.push(newItem);
      }

      return updatedBlocks;
    });
  };

  const handleDeleteItem = (itemId) => {
    setBlocks((prevBlocks) => {
      const updatedBlocks = [...prevBlocks];
      const currentIndex = blockIndex[blockIndex.length - 1];
      const updatedChildren = updatedBlocks[currentIndex].children.filter(
        (child) => child.id !== itemId
      );
      updatedBlocks[currentIndex].children = updatedChildren;
      return updatedBlocks;
    });
  };
  return (
    <>
      <ReactSortable
        key={block.id}
        list={block.children}
        setList={(currentList) => {
          setBlocks((sourceList) => {
            const tempList = [...sourceList];
            const _blockIndex = [...blockIndex];
            const lastIndex = _blockIndex.pop();
            const lastArr = _blockIndex.reduce(
              (arr, i) => arr[i]["children"],
              tempList
            );
            lastArr[lastIndex]["children"] = currentList;
            return tempList;
          });
        }}
        {...containerSortableOptions}
      >
        {block.children &&
          block.children.map((childBlock, index) => {
            return (
              <div key={childBlock.id}>
                <BlockWrapper
                  key={childBlock.id}
                  blocks={blocks}
                  block={childBlock}
                  blockIndex={[...blockIndex, index]}
                  setBlocks={setBlocks}
                />
                <button onClick={() => handleDeleteItem(childBlock.id)}>
                  Eliminar
                </button>
              </div>
            );
          })}
      </ReactSortable>
      <button onClick={handleAddItem}>Agregar Nuevo Elemento</button>

      <button onClick={handleDeleteContainer}>Eliminar Contenedor</button>
    </>
  );
}

function BlockWrapper({ block, blocks, blockIndex, setBlocks }) {
  if (!block) return null;
  if (block.type === "container") {
    return (
      <StyledBlockWrapper className="block">
        <Container
          blocks={blocks}
          block={block}
          setBlocks={setBlocks}
          blockIndex={blockIndex}
        />
      </StyledBlockWrapper>
    );
  } else {
    return (
      <StyledBlockWrapper className="block">
        text: {block.content}
      </StyledBlockWrapper>
    );
  }
}
