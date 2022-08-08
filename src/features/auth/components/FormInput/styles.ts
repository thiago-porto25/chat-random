import styled, { css } from "styled-components"
export const InputContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.base.spacing.sm};
  `}
`
