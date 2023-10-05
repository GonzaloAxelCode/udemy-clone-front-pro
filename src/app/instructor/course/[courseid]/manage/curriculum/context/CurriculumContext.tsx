"use client";
import { ReactNode, createContext, useState } from "react";

export interface CurriculumContextType {
  openNameFormSelect: any;
  setOpenNameFormSelect: any;
  openEditSection: any;
  setOpenEditSection: any;
  openSelectInsert: any;
  setOpenSelectInsert: any;
  openCreateFormNewSection: any;
  setOpenCreateFormNewSection: any;
}

export const ContextCurriculum = createContext<
  CurriculumContextType | undefined
>(undefined);

interface CurriculumProviderProps {
  children: ReactNode;
}

export function ProviderCurriculum({
  children,
}: CurriculumProviderProps): JSX.Element {
  const [openNameFormSelect, setOpenNameFormSelect] = useState({
    name: "",
    idsection: null,
    open: false,
  });
  const [openEditSection, setOpenEditSection] = useState({
    idsection: null,
    open: false,
  });

  const [openSelectInsert, setOpenSelectInsert] = useState({
    open: false,
    idsection: null,
  });

  const [openCreateFormNewSection, setOpenCreateFormNewSection] =
    useState(false);

  const value: CurriculumContextType = {
    openNameFormSelect,
    setOpenNameFormSelect,
    openEditSection,
    setOpenEditSection,

    openSelectInsert,
    setOpenSelectInsert,
    openCreateFormNewSection,
    setOpenCreateFormNewSection,
  };

  return (
    <ContextCurriculum.Provider value={value}>
      {children}
    </ContextCurriculum.Provider>
  );
}
