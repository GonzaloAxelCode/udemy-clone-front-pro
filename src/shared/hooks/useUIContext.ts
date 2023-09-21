import { useContext } from "react";
import { UIContext, UIContextType } from "../contexts/UIContext";

export function useUIContext(): UIContextType {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error("useUIContext debe ser utilizado dentro de un UIProvider");
  }
  return context;
}
