"use client";
import { UIProvider } from "@/shared/contexts";
import StyledComponentsRegistry from "@/shared/lib/registry";
import { store } from "@/shared/redux";
import { ReactNode } from "react";
import { Provider } from "react-redux";

interface Props {
  children: ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <StyledComponentsRegistry>
      <UIProvider>
        <Provider store={store}>{children}</Provider>
      </UIProvider>
    </StyledComponentsRegistry>
  );
}
