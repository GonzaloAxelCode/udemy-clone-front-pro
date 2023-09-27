import { motion } from "framer-motion";
import { cn } from "tailwind-cn";
export default function Dialog2({
  children,
  extraClassNames = "",
  className = "",
  style = {},
}: any) {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 25,
        left: "50%",
        ...style,
      }}
      className={cn("", className)}
    >
      <motion.div
        style={{ border: "1px solid #d1d7dc" }}
        className={cn(
          "dialog p-4 bg-white border border-gray-200  shadow-md ",
          extraClassNames
        )}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
