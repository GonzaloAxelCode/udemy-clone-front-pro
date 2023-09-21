import { UIProvider } from "@/shared/contexts";
import { store } from "@/shared/redux";
import StyledComponentsRegistry from "@/shared/utilities/styled-components-regsitry";
import theme from "@/shared/utilities/theme";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

interface Props {
  children: ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <UIProvider>
          <Provider store={store}>{children}</Provider>
        </UIProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
