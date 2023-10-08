import { useUIContext } from "@/shared/hooks";
import { AnimatePresence, motion } from "framer-motion"; // Importa motion y AnimatePresence
import React from "react";
import { cn } from "tailwind-cn";

const Sidebar = ({ children }: any) => {
  const { setOpenMenuNav, openMenuNav } = useUIContext();
  return (
    <React.Fragment>
      {/* Sidebar Overlay con Framer Motion */}
      <AnimatePresence>
        {openMenuNav && (
          <motion.div
            initial={{ opacity: 0 }} // Opacidad inicial
            animate={{ opacity: 0.5 }} // Opacidad final
            exit={{ opacity: 0 }} // Opacidad al salir
            transition={{ duration: 0.3 }} // Duración de la animación
            onClick={() => setOpenMenuNav(false)}
            className={cn(
              "inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden"
            )}
            style={{
              position: "fixed",
              zIndex: 20000,
            }}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          zIndex: 20001,
        }}
        className={cn(
          "fixed overflow-x-hidden lg:hidden block  inset-y-0 left-0 z-50 w-[280px] overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0",
          openMenuNav ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        )}
      >
        {children}
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
