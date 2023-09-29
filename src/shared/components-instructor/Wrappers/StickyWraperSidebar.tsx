import { useUIContext } from "@/shared/hooks";
import { motion, useAnimation } from "framer-motion";
const StickyWraperSidebar = ({ children }: any) => {
  const { setOpenMenuNavInstructor } = useUIContext();
  const controls = useAnimation();

  const handleHover = () => {
    setOpenMenuNavInstructor(true);
    controls.start({ width: "285px" });
  };

  const handleHoverExit = () => {
    controls.start({ width: "57px" });
    setOpenMenuNavInstructor(false);
  };
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 50 }}>
      <motion.div
        initial={{ width: "57px" }}
        transition={{
          width: { duration: 0.4, ease: [0.2, 0, 0.38, 0.9] },
        }}
        className="overflow-x-hidden bg-dark-100"
      >
        {children}
      </motion.div>

      <motion.div
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverExit}
        initial={{ width: "57px" }}
        transition={{
          width: { duration: 0.4, ease: [0.2, 0, 0.38, 0.9] },
        }}
        animate={controls}
        className="absolute top-0 overflow-x-hidden h-screen bg-dark-100"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default StickyWraperSidebar;
