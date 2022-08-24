import styled, { css } from "styled-components"
import { Container } from "@thiagoporto/minim-ui"

export const LandingLayoutWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: start;

    @media (min-width: ${theme.base.breakpoints.lg}) {
      align-items: center;
      justify-content: center;
    }
  `}
`

export const LandingLayoutContainer = styled(Container).attrs({ as: "main" })`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    @media (min-width: ${theme.base.breakpoints.lg}) {
      height: 640px;
      margin: ${theme.base.spacing.xs};
    }
  `}
`
