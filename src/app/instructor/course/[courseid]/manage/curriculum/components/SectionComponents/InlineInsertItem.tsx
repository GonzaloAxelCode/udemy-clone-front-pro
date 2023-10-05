import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import P from "@/shared/UIComponents/CustomHTML/P";
import PlusIcon from "@/shared/UIComponents/icons/PlusIcon";
import PlusPurpleIcon from "@/shared/UIComponents/icons/PlusPurpleIcon";
import { motion } from "framer-motion";
import { cn } from "tailwind-cn";
import useCurriculum from "../../functions/useCurriculumContext";
import FormAddNewLecture from "../FormsAddCurriculumItems/FormAddNewLecture";
import FormAddNewQuiz from "../FormsAddCurriculumItems/FormAddNewQuiz";
import FormCodeExercise from "../FormsAddCurriculumItems/FormCodeExercise";
import Formassignment from "../FormsAddCurriculumItems/Formassignment";

const InlineInsertItem = ({ handleAddItem, idsection }: any) => {
  const {
    openSelectInsert,
    setOpenSelectInsert,
    openNameFormSelect,
    setOpenNameFormSelect,
  } = useCurriculum();
  const isOpenSelectInsertItem =
    openSelectInsert.idsection === idsection && openSelectInsert.open;
  const handleCloseForm = () => {
    setOpenNameFormSelect({
      ...openNameFormSelect,
      idsection,
      name: "",
    });
  };
  return (
    <Flex
      full
      style={{
        padding: "0 0 5px 60px",
      }}
    >
      <div className="w-full relative">
        <Button
          onClick={() => {
            setOpenSelectInsert({
              ...openSelectInsert,
              idsection,
              open: true,
            });
            handleCloseForm();
            console.log(idsection);
          }}
          extendClass={cn(
            isOpenSelectInsertItem
              ? "hidden"
              : "mt-4 border-dark-100 border-1  h-full py-1 border-solid flex items-center w-fit"
          )}
          variant="white"
        >
          <div className="w-[24px] pl-1"></div>
          <P bold sm>
            Curriculumn item
          </P>
        </Button>
        <motion.span
          className={cn(
            "absolute z-2 bg-transparent cursor-pointer left-1 top-0"
          )}
          initial={false} // Esto evita que la animación se ejecute al principio
          animate={{
            rotate: isOpenSelectInsertItem ? "45deg" : "0deg",
            translateY: isOpenSelectInsertItem ? "0px" : "20px",
            translateX: isOpenSelectInsertItem ? "-30px" : "1px",
          }}
          transition={{ duration: 0.3 }}
        >
          <button
            disabled={!isOpenSelectInsertItem}
            onClick={() => {
              setOpenSelectInsert({
                ...openSelectInsert,
                idsection,
                open: false,
              });
              handleCloseForm();
            }}
          >
            <PlusIcon />
          </button>
        </motion.span>
        <Flex full noitemscenter col>
          <div
            className={cn(
              isOpenSelectInsertItem && openNameFormSelect.name === ""
                ? "flex w-full border-dashed mt-4  border-1 border-linkpurple bg-white py-3 px-4 space-x-2"
                : "hidden"
            )}
          >
            <button
              onClick={() =>
                setOpenNameFormSelect({
                  ...openNameFormSelect,
                  name: "lecture",
                  idsection,
                })
              }
              className="flex space-x-2"
            >
              <PlusPurpleIcon />
              <P bold className="text-linkpurple">
                Lecture
              </P>
            </button>
            <button
              onClick={() =>
                setOpenNameFormSelect({
                  ...openNameFormSelect,
                  name: "quiz",
                  idsection,
                })
              }
              className="flex space-x-2"
            >
              <PlusPurpleIcon />
              <P bold className="text-linkpurple">
                Quiz
              </P>
            </button>
            <button
              onClick={() =>
                setOpenNameFormSelect({
                  ...openNameFormSelect,
                  name: "coding_exercise",
                  idsection,
                })
              }
              className="flex space-x-2"
            >
              <PlusPurpleIcon />
              <P bold className="text-linkpurple">
                Coding Exercise
              </P>
            </button>
            <button
              disabled
              className="opacity-50 flex space-x-2 cursor-not-allowed"
            >
              <PlusPurpleIcon />
              <P bold className="text-linkpurple">
                Practice Test
              </P>
            </button>
            <button
              onClick={() =>
                setOpenNameFormSelect({
                  ...openNameFormSelect,
                  name: "assignment",
                  idsection,
                })
              }
              className="flex space-x-2"
            >
              <PlusPurpleIcon />
              <P bold className="text-linkpurple">
                Assignment
              </P>
            </button>
          </div>

          <div className={cn("w-full mt-4")}>
            {openNameFormSelect.name === "lecture" &&
              openNameFormSelect.idsection === idsection && (
                <FormAddNewLecture
                  handleCloseForm={handleCloseForm}
                  handleAddItem={(title: any) => {
                    handleAddItem(title);
                    setOpenSelectInsert({
                      ...openSelectInsert,
                      idsection,
                      open: false,
                    });
                  }}
                />
              )}
            {openNameFormSelect.name === "quiz" &&
              openNameFormSelect.idsection === idsection && (
                <FormAddNewQuiz handleCloseForm={handleCloseForm} />
              )}

            {openNameFormSelect.name === "coding_exercise" &&
              openNameFormSelect.idsection === idsection && (
                <FormCodeExercise handleCloseForm={handleCloseForm} />
              )}

            {openNameFormSelect.name === "assignment" &&
              openNameFormSelect.idsection === idsection && (
                <Formassignment handleCloseForm={handleCloseForm} />
              )}
          </div>
        </Flex>
      </div>
    </Flex>
  );
};

export default InlineInsertItem;
