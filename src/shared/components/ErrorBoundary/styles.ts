import { Container } from "@thiagoporto/minim-ui"
import styled, { css } from "styled-components"

export const ErrorBoundaryContainer = styled(Container).attrs({ as: "main" })`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: ${theme.base.spacing.none} ${theme.base.spacing.xxxs};

    @media (min-width: ${theme.base.breakpoints.lg}) {
      width: auto;
      margin: ${theme.base.spacing.none} auto;
    }
  `}
`
