import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import PlusIcon from "@/shared/UIComponents/icons/PlusIcon";
import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import styled from "styled-components";
import useCurriculum from "../functions/useCurriculumContext";
import LectureEditorItem from "./LectureComponents/LectureEditorItem";
import FormAddNewSection from "./SectionComponents/FormAddNewSection";
import InlineInsertItem from "./SectionComponents/InlineInsertItem";
import SectionContainer from "./SectionComponents/SectionContainer";

const StyledBlockWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
  cursor: move;
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

export default function CurriculumListAndSublists() {
  const [blocks, setBlocks] = useState([
    {
      id: 1,
      content: "Section 1",
      parent_id: null,
      type: "container",

      title: "Introduccion a React",
      learning_objetive: "Explcamos que es react desde cero",
      order: 1,
      children: [
        {
          id: 1,
          order: 1,
          content: "item 2",
          width: 3,
          type: "text",
          parent_id: 1,
          component: LectureEditorItem,

          title: "Que es React",
        },
        {
          id: 2,
          order: 2,
          content: "item 3",
          width: 3,
          title: "Como funciona react",
          type: "text",
          parent_id: 1,
          component: LectureEditorItem,
        },
      ],
    },
    {
      id: 2,
      order: 2,
      content: "Section 2",
      parent_id: null,
      type: "container",
      title: "Historia de React",
      learning_objetive: "Aprenderas la historia de react ",
      children: [
        {
          order: 3,
          id: 3,
          content: "item 5",
          width: 3,
          parent_id: 2,
          title: "Primera Version de React ",
          component: LectureEditorItem,
        },
        {
          id: 4,
          order: 4,
          content: "item 6",
          width: 2,
          type: "text",
          parent_id: 2,
          title: "React Clases",
          component: LectureEditorItem,
        },
        {
          id: 5,
          order: 5,
          content: "item 7",
          width: 2,
          title: "React 18: Componentes ",
          type: "text",
          parent_id: 2,
          component: LectureEditorItem,
        },
      ],
    },
  ]);

  const ORDER_ALL = () => {
    //setBlocks(ordenarBloques(blocks));
  };

  const createContainer = (title: string, learning_objetive: string) => {
    // Crea un nuevo elemento de tipo "container" y agrega al estado "blocks"
    const newContainer = {
      id: blocks.length + 1, // Asigna un nuevo ID único
      content: `Section ${blocks.length + 1}`,
      parent_id: null,
      type: "container",
      title,
      order: blocks.length + 1,
      learning_objetive,
      children: [],
    };
    setBlocks((prevBlocks: any) => [...prevBlocks, newContainer]);
    console.log(blocks);
  };
  const { openCreateFormNewSection, setOpenCreateFormNewSection } =
    useCurriculum();

  return (
    <div>
      <ReactSortable
        className="flex flex-col w-full  space-y-10"
        list={blocks}
        onChange={() => ORDER_ALL()}
        setList={setBlocks}
        {...sortableOptions}
      >
        {blocks.map((block, blockIndex) => {
          return (
            <BlockWrapper
              ORDER_ALL={ORDER_ALL}
              key={block.id}
              block={block}
              blocks={blocks}
              blockIndex={[blockIndex]}
              setBlocks={setBlocks}
            />
          );
        })}
      </ReactSortable>
      <Button
        onClick={() => setOpenCreateFormNewSection(!openCreateFormNewSection)}
        size="sm"
        variant="white"
        extendClass="flex items-center mt-4 border-1 border-dark-100 border-solid mb-4"
      >
        <PlusIcon />
        Section
      </Button>

      {openCreateFormNewSection && (
        <FormAddNewSection handleAddNewSection={createContainer} />
      )}
    </div>
  );
}

function Container({
  block,
  ORDER_ALL,
  idsection,
  blockIndex,
  setBlocks,
  blocks,
  allElementIndices,
}: any) {
  const handleDeleteContainer = () => {
    setBlocks((prevBlocks: any) => {
      const updatedBlocks = [...prevBlocks];
      const currentIndex = blockIndex[blockIndex.length - 1];
      updatedBlocks.splice(currentIndex, 1);

      // Actualizar el orden de los elementos restantes
      updatedBlocks.forEach((block: any, index: number) => {
        block.order = index + 1;
      });

      if (currentIndex > 0) {
        const previousIndex = currentIndex - 1;
        const previousContainer = updatedBlocks[previousIndex];
        previousContainer.children = previousContainer.children.concat(
          block.children
        );
      }
      return updatedBlocks;
    });
    ORDER_ALL();
    console.log(blocks);
  };

  const handleAddItemWithOrder = (
    title: string,
    parent_id: number,
    desiredOrder: any = null
  ) => {
    setBlocks((prevBlocks: any) => {
      const updatedBlocks = [...prevBlocks];
      const currentIndex = blockIndex[blockIndex.length - 1];

      const currentContainer = updatedBlocks[currentIndex];
      const orderArray: any = [];
      currentContainer.children.forEach((item: any) => {
        orderArray.push(item.order);
      });

      if (desiredOrder === null) {
        desiredOrder = orderArray[orderArray.length - 1] + 1;
      } else {
        desiredOrder = desiredOrder;
      }
      if (isNaN(desiredOrder)) {
        console.log("Esta vacio, tomaremo el elemento anterior");
        const allOrderArrays: any = [];

        updatedBlocks.forEach((container) => {
          // Crear un array para almacenar los números de orden del contenedor actual
          const orderArray: any = [];

          // Iterar a través de los elementos en el contenedor actual
          container.children.forEach((item) => {
            orderArray.push(item.order);
          });

          allOrderArrays.push(orderArray); // Agregar el array de números de orden al array general
        });

        const primerElementoNoVacio = allOrderArrays
          .reverse()
          .find((orderArray) => orderArray.length > 0);

        const ultimoElemento =
          primerElementoNoVacio[primerElementoNoVacio.length - 1] + 1;
        console.log(ultimoElemento);
        desiredOrder = ultimoElemento;
      }

      // Obtener todos los bloques de todos los contenedores
      const allBlocks = updatedBlocks.reduce((acc: any, block: any) => {
        if (block.children) {
          acc.push(...block.children);
        }
        return acc;
      }, []);

      // Incrementar el orden de todos los elementos existentes que tienen un orden igual o mayor
      allBlocks.forEach((item: any) => {
        if (item.order >= desiredOrder) {
          item.order += 1;
        }
      });

      // Crear el nuevo elemento con el orden deseado
      const newItem = {
        id:
          Math.max(
            ...(blocks?.flatMap((block: any) =>
              block.children.map((child: any) => child.id)
            ) ?? [0]), // Si blocks es undefined o no tiene elementos, se inicializa con [0]
            0
          ) + 1,
        content: `Nuevo Item ${
          Math.max(
            ...(blocks?.flatMap((block: any) =>
              block.children.map((child: any) => child.id)
            ) ?? [0]),
            0
          ) + 1
        }`,
        title,
        order: desiredOrder,
        component: LectureEditorItem,
        parent_id: parent_id,
        type: "text",
        width: 3, // Puedes ajustar esto según tus necesidades
      };

      // Agregar el nuevo elemento al contenedor actual
      updatedBlocks[currentIndex].children.push(newItem);

      return updatedBlocks;
    });
  };

  const handleAddItem = (title: string) => {
    setBlocks((prevBlocks: any) => {
      const updatedBlocks = [...prevBlocks];
      const currentIndex = blockIndex[blockIndex.length - 1];

      // Obtener todos los bloques de todos los contenedores
      const allBlocks = updatedBlocks.reduce((acc: any, block: any) => {
        if (block.children) {
          acc.push(...block.children);
        }
        return acc;
      }, []);

      let newItemOrder = 1; // Valor predeterminado si no hay elementos anteriores

      if (allBlocks.length > 0) {
        // Calcular el nuevo orden como el promedio entre el orden del último elemento y 1 más
        const lastItem = allBlocks[allBlocks.length - 1];
        newItemOrder = lastItem.order + 1;
      }

      const newItem = {
        id:
          Math.max(
            ...(blocks?.flatMap((block: any) =>
              block.children.map((child: any) => child.id)
            ) ?? [0]), // Si blocks es undefined o no tiene elementos, se inicializa con [0]
            0
          ) + 1,
        content: `Nuevo Item ${
          Math.max(
            ...(blocks?.flatMap((block: any) =>
              block.children.map((child: any) => child.id)
            ) ?? [0]),
            0
          ) + 1
        }`,
        title,
        order: newItemOrder,
        component: LectureEditorItem,
        parent_id: block.id,
        type: "text",
        width: 3, // Puedes ajustar esto según tus necesidades
      };
      // Actualizar el orden de todos los elementos
      allBlocks.push(newItem);
      allBlocks.forEach((item: any, index: number) => {
        item.order = index + 1;
      });
      // Verifica si el nuevo elemento ya existe en todos los elementos de todos los contenedores
      const isDuplicate = blocks.some((otherBlock: any) =>
        otherBlock.children.some((child: any) => child.id === newItem.id)
      );

      if (!isDuplicate) {
        updatedBlocks[currentIndex].children.push(newItem);
      }
      updatedBlocks.forEach((block: any) => {
        if (block.children) {
          block.children.sort((a: any, b: any) => a.order - b.order);
        }
      });
      ORDER_ALL();
      return updatedBlocks;
    });

    console.log(blocks);
  };

  const handleDeleteItem = (itemId: any) => {
    setBlocks((prevBlocks: any) => {
      const updatedBlocks = [...prevBlocks];
      const currentIndex = blockIndex[blockIndex.length - 1];

      // Obtener todos los bloques de todos los contenedores
      const allBlocks = updatedBlocks.reduce((acc: any, block: any) => {
        if (block.children) {
          acc.push(...block.children);
        }
        return acc;
      }, []);

      // Eliminar el elemento
      const deletedItem = allBlocks.find((item: any) => item.id === itemId);
      const deletedOrder = deletedItem.order;
      const currentIndexContainer = updatedBlocks[currentIndex];

      // Recalcular el orden de todos los elementos en todos los contenedores
      allBlocks.forEach((item: any, index: number) => {
        if (item.order > deletedOrder) {
          item.order -= 1;
        }
      });

      // Eliminar el elemento del contenedor actual
      currentIndexContainer.children = currentIndexContainer.children.filter(
        (child: any) => child.id !== itemId
      );

      return updatedBlocks;
    });
  };

  
  const currentIndex = blockIndex[blockIndex.length - 1];
  let total = 0;

  for (let i = 0; i < currentIndex; i++) {
    const block = blocks[i];
    if (block.children) {
      total += block.children.length;
    }
  }

  return (
    <SectionContainer
      title={block.title}
      handleDeleteContainer={handleDeleteContainer}
      idsection={idsection}
      block={block}
    >
      <Flex
        full
        noitemscenter
        col
        style={{
          padding: "0 0 5px 60px",
        }}
      >
        <ReactSortable
          key={block.id}
          list={block.children}
          setList={(currentList) => {
            setBlocks((sourceList: any) => {
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
            block.children.map((childBlock: any, index: any) => {
              let indice = index + 1 + total;
              return (
                <div className="w-full" key={childBlock.id}>
                  <BlockWrapper
                    ORDER_ALL={ORDER_ALL}
                    key={childBlock.id}
                    title={childBlock.title}
                    childblockid={childBlock.id}
                    idsection={idsection}
                    blocks={blocks}
                    index={indice}
                    block={childBlock}
                    component={childBlock.component}
                    blockIndex={[...blockIndex, index]}
                    setBlocks={setBlocks}
                    handleDeleteItem={(idchild: any) =>
                      handleDeleteItem(idchild)
                    }
                  />
                </div>
              );
            })}
        </ReactSortable>
      </Flex>
      <InlineInsertItem
        handleAddItemWithOrder={handleAddItemWithOrder}
        handleAddItem={handleAddItem}
        idsection={idsection}
      />
    </SectionContainer>
  );
}

function BlockWrapper({
  block,
  index,
  ORDER_ALL,
  blocks,
  title,
  blockIndex,
  setBlocks,
  component,
  childblockid,
  idsection,

  handleDeleteItem,
}: any) {
  const Compo = component;

  if (!block) return null;
  if (block.type === "container") {
    return (
      <div className="block">
        <Container
          ORDER_ALL={ORDER_ALL}
          idsection={block.id}
          blocks={blocks}
          block={block}
          setBlocks={setBlocks}
          blockIndex={blockIndex}
        />
      </div>
    );
  } else {
    return (
      <StyledBlockWrapper className="block">
        <Compo
          handleDeleteItem={handleDeleteItem}
          childblockid={childblockid}
          index={index}
          block={block}
          title={title}
          idsection={block.id}
        />
      </StyledBlockWrapper>
    );
  }
}
