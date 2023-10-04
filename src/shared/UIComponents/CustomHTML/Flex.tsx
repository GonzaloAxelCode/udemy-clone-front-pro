"use client";

import styled, { css } from "styled-components";
import { cn } from "tailwind-cn";

interface FlexProps {
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
  wfit?: any;
}

const StyledFlex2 = styled.div<any>`
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

const Flex = (
  props: React.HTMLProps<HTMLDivElement> & FlexProps,
  { ...args }: React.HTMLProps<HTMLDivElement>
) => {
  const flexClasses = cn(
    "flex",
    props.hidden ? "hidden" : "",
    props.col ? "flex-col" : "",
    props.stretch ? "items-stretch" : "",
    props.itemsend ? "items-end" : "",
    !props.noitemscenter ? "items-center" : "flex-start",
    props.justifycenter ? "justify-center" : "",
    props.between ? "justify-between" : "",
    props.hfull ? "h-full" : "w-auto",
    props.full ? "w-full" : "w-auto",
    props.wfit ? "w-fit" : ""
  );
  const {
    hidden,
    col,
    stretch,
    itemsend,
    noitemscenter,
    justifycenter,
    between,
    hfull,
    full,
    wfit,
    className,

    // Otras propiedades específicas que necesitas desestructurar
    ...restProps // El resto de las propiedades
  } = props;

  return (
    <StyledFlex2
      className={`${flexClasses} ${props.className || ""}`}
      disabled={props.disabled}
      cssmax={props.cssmax}
      cssmin={props.cssmin}
      minscreen={props.minscreen}
      maxscreen={props.maxscreen}
      style={props.style}
      {...restProps}
    >
      {props.children}
    </StyledFlex2>
  );
};

export default Flex;
