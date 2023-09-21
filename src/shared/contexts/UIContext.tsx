"use client";
import { ReactNode, createContext, useState } from "react";

export interface UIContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const UIContext = createContext<UIContextType | undefined>(undefined);

interface UIProviderProps {
  children: ReactNode;
}

export function UIProvider({ children }: UIProviderProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const value: UIContextType = {
    isModalOpen,
    openModal,
    closeModal,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
