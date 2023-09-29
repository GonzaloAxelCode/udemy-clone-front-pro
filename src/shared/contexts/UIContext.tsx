"use client";
import { ReactNode, createContext, useState } from "react";

export interface UIContextType {
  openMenuNav: any;
  setOpenMenuNav: any;
  openMenuNavInstructor: any;
  setOpenMenuNavInstructor: any;
}

export const UIContext = createContext<UIContextType | undefined>(undefined);

interface UIProviderProps {
  children: ReactNode;
}

export function UIProvider({ children }: UIProviderProps): JSX.Element {
  const [openMenuNav, setOpenMenuNav] = useState(false);
  const [openMenuNavInstructor, setOpenMenuNavInstructor] = useState(false);

  const value: UIContextType = {
    openMenuNav,
    setOpenMenuNav,
    openMenuNavInstructor,
    setOpenMenuNavInstructor,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
