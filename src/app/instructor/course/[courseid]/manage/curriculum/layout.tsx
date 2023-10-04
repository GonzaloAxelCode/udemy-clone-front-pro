import { ProviderCurriculum } from "./context/CurriculumContext";

const Layout = ({ children }: any) => {
  return <ProviderCurriculum>{children}</ProviderCurriculum>;
};

export default Layout;
