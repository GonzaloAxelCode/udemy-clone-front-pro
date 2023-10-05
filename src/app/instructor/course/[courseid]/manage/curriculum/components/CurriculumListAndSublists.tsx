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
      parent_id: null,
      type: "container",
      title: "Introduccion a React",
      learning_objetive: "Explcamos que es react desde cero",
      children: [
        {
          id: 1,
          parent_id: 1,
          component: LectureEditorItem,
          title: "Que es React",
        },
        {
          id: 2,
          title: "Como funciona react",
          parent_id: 1,
          component: LectureEditorItem,
        },
      ],
    },
    {
      id: 2,
      parent_id: null,
      type: "container",
      title: "Historia de React",
      learning_objetive: "Aprenderas la historia de react ",
      children: [
        {
          id: 3,
          parent_id: 2,
          title: "Primera Version de React ",
          component: LectureEditorItem,
        },
        {
          id: 4,
          parent_id: 2,
          title: "React Clases",
          component: LectureEditorItem,
        },
        {
          id: 5,
          title: "React 18: Componentes ",
          parent_id: 2,
          component: LectureEditorItem,
        },
      ],
    },
  ]);

  const createContainer = (title: string, learning_objetive: string) => {
    const newContainer = {
      id: blocks.length + 1,
      parent_id: null,
      type: "container",
      title,
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
        setList={setBlocks}
        {...sortableOptions}
      >
        {blocks.map((block, blockIndex) => {
          return (
            <BlockWrapper
              index={blockIndex + 1}
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
  index,
  block,
  idsection,
  blockIndex,
  setBlocks,
  blocks,
}: any) {
  const handleDeleteContainer = () => {
    setBlocks((prevBlocks: any) => {
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
  const handleAddItem = (title: string) => {
    setBlocks((prevBlocks: any) => {
      const updatedBlocks = [...prevBlocks];
      const currentIndex = blockIndex[blockIndex.length - 1];
      const newItem = {
        id:
          Math.max(
            ...(blocks?.flatMap((block: any) =>
              block.children.map((child: any) => child.id)
            ) ?? [0]),
            0
          ) + 1,
        title,
        component: LectureEditorItem,
        parent_id: block.id,
      };

      const isDuplicate = blocks.some((otherBlock: any) =>
        otherBlock.children.some((child: any) => child.id === newItem.id)
      );

      if (!isDuplicate) {
        updatedBlocks[currentIndex].children.push(newItem);
      }

      return updatedBlocks;
    });
  };

  const handleDeleteItem = (itemId: any) => {
    setBlocks((prevBlocks: any) => {
      const updatedBlocks = [...prevBlocks];
      const currentIndex = blockIndex[blockIndex.length - 1];
      const currentIndexContainer = updatedBlocks[currentIndex];
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
      index={index}
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
      <InlineInsertItem handleAddItem={handleAddItem} idsection={idsection} />
    </SectionContainer>
  );
}

function BlockWrapper({
  block,
  index,
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
          idsection={block.id}
          blocks={blocks}
          block={block}
          index={index}
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
          idsection={block.id}
        />
      </StyledBlockWrapper>
    );
  }
}
