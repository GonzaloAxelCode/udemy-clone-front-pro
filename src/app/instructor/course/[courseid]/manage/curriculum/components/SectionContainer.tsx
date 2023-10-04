import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import P from "@/shared/UIComponents/CustomHTML/P";
import DocumentIcon from "@/shared/UIComponents/icons/DocumentIcon";
import EmptyIcon from "@/shared/UIComponents/icons/EmptyIcon";
import PenIcon from "@/shared/UIComponents/icons/PenIcon";
import ThreeLinesIcon from "@/shared/UIComponents/icons/ThreeLinesIcon";
import TrashIcon from "@/shared/UIComponents/icons/TrashIcon";
import { useState } from "react";
import useCurriculum from "../functions/useCurriculumContext";
import FormEditSectionContainer from "./FormEditSectionContainer";

const SectionContainer = ({
  idsection,
  children,
  title,
  handleDeleteContainer,
}: any) => {
  const [isHoverHeader, setIsHoverHeader] = useState(false);
  const { openEditSection, setOpenEditSection } = useCurriculum();
  return (
    <Flex
      full
      col
      noitemscenter
      className="border-1 p-2 bg-gray-100  border-solid border-dark-100"
    >
      {openEditSection.open && openEditSection.idsection === idsection ? (
        <FormEditSectionContainer idsection={idsection} />
      ) : (
        <Flex
          onMouseEnter={() => setIsHoverHeader(true)}
          onMouseLeave={() => setIsHoverHeader(false)}
          full
          between
          className="cursor-move"
          style={{ padding: "19px 8px" }}
        >
          <Flex full className="space-x-2">
            <P bold> Section: </P>
            <DocumentIcon scale="0.7" />
            <P> {title} </P>
            {isHoverHeader ? (
              <>
                <button
                  onClick={() =>
                    setOpenEditSection({
                      idsection,
                      open: true,
                    })
                  }
                >
                  <PenIcon scale="0.7" />
                </button>
                <button onClick={() => handleDeleteContainer()}>
                  <TrashIcon scale="0.7" />
                </button>
              </>
            ) : (
              <>
                <EmptyIcon />
                <EmptyIcon />
              </>
            )}
          </Flex>
          <Flex>{isHoverHeader ? <ThreeLinesIcon /> : <EmptyIcon />}</Flex>
        </Flex>
      )}
      <Flex col full noitemscenter>
        {children}
      </Flex>
    </Flex>
  );
};

export default SectionContainer;
