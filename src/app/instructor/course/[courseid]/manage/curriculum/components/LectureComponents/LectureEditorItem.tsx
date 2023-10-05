import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import P from "@/shared/UIComponents/CustomHTML/P";
import ArrowDownIcon from "@/shared/UIComponents/icons/ArrowDownIcon";
import CheckWhiteIcon from "@/shared/UIComponents/icons/CheckWhiteIcon";
import DocumentIcon from "@/shared/UIComponents/icons/DocumentIcon";
import EmptyIcon from "@/shared/UIComponents/icons/EmptyIcon";
import PenIcon from "@/shared/UIComponents/icons/PenIcon";
import PlusIcon from "@/shared/UIComponents/icons/PlusIcon";
import ThreeLinesIcon from "@/shared/UIComponents/icons/ThreeLinesIcon";
import TrashIcon from "@/shared/UIComponents/icons/TrashIcon";
import React, { useState } from "react";
import { cn } from "tailwind-cn";
import useLectureEditor from "../../functions/useLectureEditor";
import FormEditItemTitle from "./FormEditItemTitle";
import SelectContentType from "./SelectContentType";

const LectureEditorItem = ({
  block,
  childblockid,
  handleDeleteItem,
  index,
}: any) => {
  const {
    handleOpenSelectContentTypeExpand,
    handleCloseEdit,
    handleToggleOpenExpand,
    handleOpenEdit,
    handleCloseSelectContent,
    openSelectContentTypeExpand,
    expand,
    openEdit,
  } = useLectureEditor(childblockid);
  const [isHoverHeader, setIsHoverHeader] = useState(false);

  return (
    <Flex
      col
      onMouseEnter={() => setIsHoverHeader(true)}
      onMouseLeave={() => setIsHoverHeader(false)}
      noitemscenter
      className="bg-white border-1 border-solid border-dark-100"
    >
      <Flex full noitemscenter className="px-3 py-2">
        <P style={{ flex: "0 0 auto" }} className={cn(" ", "flex space-x-1")}>
          <span
            className={cn(
              "mt-3 bg-dark-100  h-[13px] w-[13px] flex items-center justify-center  rounded-full border-1 border-solid border-dark-100 "
            )}
          >
            <span>
              <CheckWhiteIcon scale="0.5" />
            </span>
          </span>
          <span style={{ marginTop: "6px" }}>
            Lecture {""}
            {index}:{" "}
          </span>
        </P>

        <Flex noitemscenter full between>
          {!openEdit.open ? (
            <React.Fragment>
              <Flex full className="flex-grow">
                <DocumentIcon scale="0.7" />
                <P> {block.title} </P>
                {isHoverHeader ? (
                  <React.Fragment>
                    <button onClick={handleOpenEdit}>
                      <PenIcon scale="0.7" />
                    </button>
                    <button onClick={() => handleDeleteItem(childblockid)}>
                      <TrashIcon scale="0.7" />
                    </button>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <EmptyIcon />
                    <EmptyIcon />
                  </React.Fragment>
                )}
              </Flex>
              <Flex>
                {!openSelectContentTypeExpand.open && (
                  <React.Fragment>
                    <Button
                      onClick={handleOpenSelectContentTypeExpand}
                      variant="white"
                      extendClass="h-[34px] flex items-center space-x-2 border-1 border-dark-100 border-solid"
                    >
                      <PlusIcon />
                      <P bold sm>
                        Content
                      </P>
                    </Button>
                    <button
                      className={cn(
                        !expand.open ? "rotate-0" : "rotate-180",
                        "px-2"
                      )}
                      onClick={handleToggleOpenExpand}
                    >
                      <ArrowDownIcon scale="1" />
                    </button>
                    {isHoverHeader ? (
                      <ThreeLinesIcon />
                    ) : (
                      <div className="w-[24px] h-[24px]"> </div>
                    )}
                  </React.Fragment>
                )}
              </Flex>
            </React.Fragment>
          ) : (
            <FormEditItemTitle
              onClose={handleCloseEdit}
              idchild={childblockid}
            />
          )}
        </Flex>
      </Flex>

      <Flex
        col
        full
        noitemscenter
        className={cn(
          expand.open
            ? "border-0  space-y-2 p-3 border-t-1 border-solid border-dark-100"
            : "hidden"
        )}
      >
        <Button
          variant="white"
          extendClass="h-[34px] w-fit flex items-center space-x-2 border-1 border-dark-100 border-solid"
        >
          <PlusIcon />
          <P bold sm>
            Description
          </P>
        </Button>
        <Button
          variant="white"
          extendClass="h-[34px] w-fit flex items-center space-x-2 border-1 border-dark-100 border-solid"
        >
          <PlusIcon />
          <P bold sm>
            Resources
          </P>
        </Button>
      </Flex>

      <div
        className={cn(openSelectContentTypeExpand.open ? "w-full" : "hidden")}
      >
        <SelectContentType
          onClose={handleCloseSelectContent}
          idchild={childblockid}
        />
      </div>
    </Flex>
  );
};

export default LectureEditorItem;
