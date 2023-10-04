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
import { useState } from "react";
import { cn } from "tailwind-cn";
import useCurriculum from "../functions/useCurriculumContext";
import FormEditItemTitle from "./FormEditItemTitle";
import SelectContentType from "./SelectContentType";

const LectureEditorItem = ({
  childblockid,
  title,
  handleDeleteItem,
  idsection,
}: any) => {
  const [isHoverHeader, setIsHoverHeader] = useState(false);
  const [expdand, setExpand] = useState(false);
  const { openSelectContentTypeExpand, setOpenSelectContentTypeExpand } =
    useCurriculum();
  const { openEdit, setOpenEdit } = useCurriculum();

  const isEditLectureOpen =
    openEdit.idsection === idsection &&
    openEdit.idchild === childblockid &&
    openEdit.open;
  return (
    <Flex
      col
      onMouseEnter={() => setIsHoverHeader(true)}
      onMouseLeave={() => setIsHoverHeader(false)}
      noitemscenter
      className="bg-white border-1 border-solid border-dark-100"
    >
      <Flex full noitemscenter className="px-3 py-2">
        <P
          style={{ flex: "0 0 auto" }}
          className={cn(" items-center ", "flex space-x-1")}
       
        >
          <span
            className={cn(
              "bg-dark-100  h-[13px] w-[13px] flex items-center justify-center  rounded-full border-1 border-solid border-dark-100 "
            )}
          >
            <span>
              <CheckWhiteIcon scale="0.5" />
            </span>
          </span>{" "}
          <span >Lecture: </span>
        </P>

        <Flex noitemscenter full between>
          {!isEditLectureOpen ? (
            <>
              <Flex full className="flex-grow">
                <DocumentIcon scale="0.7" />
                <P> {title} </P>
                {isHoverHeader ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenEdit({
                          idsection,
                          idchild: childblockid,
                          open: true,
                        })
                      }
                    >
                      <PenIcon scale="0.7" />
                    </button>
                    <button onClick={() => handleDeleteItem(childblockid)}>
                      <TrashIcon scale="0.7" />
                    </button>
                  </>
                ) : (
                  <>
                    <EmptyIcon />
                    <EmptyIcon />
                  </>
                )}
              </Flex>{" "}
              <Flex>
                {!openSelectContentTypeExpand.open && (
                  <>
                    {" "}
                    <Button
                      onClick={() =>
                        setOpenSelectContentTypeExpand({
                          
                          idchild: childblockid,
                          open: true,
                        })
                      }
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
                        !expdand ? "rotate-0" : "rotate-180",
                        "px-2"
                      )}
                      onClick={() => setExpand(!expdand)}
                    >
                      <ArrowDownIcon scale="1" />
                    </button>
                    {isHoverHeader ? (
                      <ThreeLinesIcon />
                    ) : (
                      <div className="w-[24px] h-[24px]"> </div>
                    )}
                  </>
                )}
              </Flex>
            </>
          ) : (
            <FormEditItemTitle idchild={childblockid} />
          )}
        </Flex>
      </Flex>

      {expdand && (
        <Flex
          col
          full
          noitemscenter
          className="border-0  space-y-2 p-3 border-t-1 border-solid border-dark-100"
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
      )}

      {openSelectContentTypeExpand.open &&
        openSelectContentTypeExpand.idchild === childblockid && (
          <SelectContentType />
        )}
    </Flex>
  );
};

export default LectureEditorItem;
