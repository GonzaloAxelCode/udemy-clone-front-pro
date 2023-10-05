import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import PlusIcon from "@/shared/UIComponents/icons/PlusIcon";

const HeaderItemLecture = ({ children, title, onClose }: any) => {
  return (
    <Flex
      full
      col
      justifycenter
      className="relative p-3 border-t-1 border-l-0 border-r-0 border-b-0  border-dark-100"
    >
      <Button
        extendClass="absolute flex items-center hover:bg-white -top-[25px] right-6 z-2 border-t-1 border-l-1 border-r-1 border-b-0  border-dark-100 "
        variant="white"
        size="xs"
      >
        <span>{title}</span>
        <span onClick={onClose} className="cursor-pointer rotate-45">
          <PlusIcon />
        </span>
      </Button>
      {children}
    </Flex>
  );
};

export default HeaderItemLecture;
