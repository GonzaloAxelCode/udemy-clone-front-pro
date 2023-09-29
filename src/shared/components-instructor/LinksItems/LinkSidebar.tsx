import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import { useUIContext } from "@/shared/hooks";
import { motion } from "framer-motion";
import Link from "next/link";
const LinkSidebar = ({
  href = "#",
  active = false,
  children,
  text,
  ...args
}: any) => {
  const { openMenuNavInstructor } = useUIContext();

  return (
    <Link
      className="pl-3 p-4  hover:bg-gray-400 w-full"
      href={href}
      style={{
        borderLeft: active ? "4px solid #a435f0" : "4px solid transparent",
      }}
      {...args}
    >
      <Flex full>
        <span>{children}</span>
        {openMenuNavInstructor && (
          <motion.span
            className="ml-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {text}
          </motion.span>
        )}
      </Flex>
    </Link>
  );
};

export default LinkSidebar;
