import styled, { css } from "styled-components"
import { Container } from "@thiagoporto/minim-ui"

export const ChatLayoutWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: start;

    @media (min-width: ${theme.base.breakpoints.lg}) {
      align-items: center;
      justify-content: center;
      padding: ${theme.base.spacing.xs} ${theme.base.spacing.none};
      border-radius: ${theme.base.borderRadius.md};
    }
  `}
`

export const ChatLayoutContainer = styled(Container).attrs({ as: "main" })`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    ${theme.base.boxShadow.large}

    @media (min-width: ${theme.base.breakpoints.lg}) {
      border-radius: ${theme.base.borderRadius.md};
    }
  `}
`
