import styled, { css } from "styled-components"

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    flex: 1;
    position: relative;
    background-color: ${theme.colors.brand.gray10};
  `}
`
