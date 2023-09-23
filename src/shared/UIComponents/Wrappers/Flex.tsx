import styled, { css } from "styled-components";

interface FlexProps {
  minScreen?: number;
  maxScreen?: number;
  col?: boolean;
  noItemsCenter?: boolean;
  justifyCenter?: boolean;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => (props.col ? "column" : "row")};
  align-items: ${(props) => (!props.noItemsCenter ? "center" : " flex-start")};
  justify-center: ${(props) => (props.justifyCenter ? "center" : "flex-start")};

  /* Aplicar estilos específicos según el ancho mínimo y máximo proporcionados */
  ${(props) =>
    props.minScreen &&
    css`
      @media (min-width: ${props.minScreen}px) {
        display: none;
      }
    `}

  ${(props) =>
    props.maxScreen &&
    css`
      @media (max-width: ${props.maxScreen}px) {
        display: none;
      }
    `}
`;

export default Flex;
