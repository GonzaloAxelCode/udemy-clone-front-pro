"use client";

import styled, { css } from "styled-components";
import { cn } from "tailwind-cn";

interface FlexProps extends React.HTMLProps<HTMLDivElement> {
  minscreen?: any;
  maxscreen?: any;
  col?: any;
  noitemscenter?: any;
  justifycenter?: any;
  full?: any;
  between?: any;
  cssmax?: any;
  cssmin?: any;
  stretch?: any;
  hfull?: any;
  itemsend?: any;
  disabled?: any;
  hidden?: any;
  children?: any;
  className?: string;
}

const StyledFlex = styled.div<FlexProps>`
  display: ${(props) => (props.hidden ? "none" : "flex")};
  flex-direction: ${(props) => (props.col ? "column" : "")};
  align-items: ${(props) =>
    props.stretch
      ? "stretch"
      : !props.noitemscenter
      ? "center"
      : props.itemsend
      ? "flex-end"
      : "flex-start"};

  justify-content: ${(props) =>
    props.justifycenter
      ? "center"
      : props.between
      ? "space-between"
      : "flex-start"};

  height: ${(props) => (props.hfull ? "100%" : "")};
  width: ${(props) => (props.full ? "100%" : "")};

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
    `}

  ${(props) =>
    props.minscreen &&
    css`
      @media (min-width: ${props.minscreen}px) {
        ${!props.cssmin ? "display:none;" : props.cssmin}
      }
    `}

  ${(props) =>
    props.maxscreen &&
    css`
      @media (max-width: ${props.maxscreen}px) {
        ${!props.cssmax ? "display:none;" : props.cssmax}
      }
    `}
`;

const Flex = (props: FlexProps) => {
  return (
    <StyledFlex className={cn(props.className)} {...props}>
      {props.children}
    </StyledFlex>
  );
};

export default Flex;
