"use client";
import styled, { css } from "styled-components";

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
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => (props.col ? "column" : "")};
  align-items: ${(props) =>
    props.stretch ? "stretch" : !props.noitemscenter ? "center" : "flex-start"};
    
  justify-content: ${(props) =>
    props.justifycenter
      ? "center"
      : props.between
      ? "space-between"
      : "flex-start"};
      
  height: ${(props) => (props.hfull ? "100%" : "")}
  width: ${(props) => (props.full ? "100%" : "")};

  /* Aplicar estilos específicos según el ancho mínimo y máximo proporcionados */
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

export default Flex;
