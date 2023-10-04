import { useContext } from "react";
import {
  ContextCurriculum,
  CurriculumContextType,
} from "../context/CurriculumContext";

function useCurriculum(): CurriculumContextType {
  const context = useContext(ContextCurriculum);
  if (context === undefined) {
    throw new Error("useCurriculum debe ser utilizado dentro de un UIProvider");
  }
  return context;
}

export default useCurriculum;
