import styled, { css } from "styled-components";

interface FlexProps {
  minScreen?: number;
  maxScreen?: number;
  col?: boolean;
  noItemsCenter?: boolean;
  justifyCenter?: boolean;
  full?: boolean;
  between?: boolean;
  cssMax?: string;
  cssMin?: string;
}

const Flex = styled.div<FlexProps>`
  display: flex;

  flex-direction: ${(props) => (props.col ? "column" : "")};
  align-items: ${(props) => (!props.noItemsCenter ? "center" : " flex-start")};
  justify-content: ${(props) =>
    props.justifyCenter
      ? "center"
      : props.between
      ? "space-between"
      : "flex-start"};

  width: ${(props) => (props.full ? "100%" : "")};

  /* Aplicar estilos específicos según el ancho mínimo y máximo proporcionados */
  ${(props) =>
    props.minScreen &&
    css`
      @media (min-width: ${props.minScreen}px) {
        ${!props.cssMin ? "display:none;" : props.cssMin}
      }
    `}

  ${(props) =>
    props.maxScreen &&
    css`
      @media (max-width: ${props.maxScreen}px) {
        ${!props.cssMax ? "display:none;" : props.cssMax}
      }
    `}
`;

export default Flex;
