import { motion } from "framer-motion";
import { cn } from "tailwind-cn";
export default function Dialog({
  children,
  extraClassNames = "",
  className = "",
}: any) {
  return (
    <div className={cn("absolute z-10", className)}>
      <motion.div
        style={{ border: "1px solid #d1d7dc" }}
        className={cn(
          "dialog p-4 bg-white border border-gray-200  shadow-md ",
          extraClassNames
        )}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
