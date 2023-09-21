import styled, { css } from "styled-components";

interface FlexProps {
  minScreen?: number;
  maxScreen?: number;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: center;
  
  height: 100%;

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
