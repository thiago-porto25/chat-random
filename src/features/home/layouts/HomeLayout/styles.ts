import styled, { css } from "styled-components"
import { Container } from "@thiagoporto/minim-ui"

export const HomeLayoutWrapper = styled.div`
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

export const HomeLayoutContainer = styled(Container).attrs({ as: "main" })`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: ${theme.base.spacing.none} ${theme.base.spacing.xxxs};
    text-align: center;

    @media (min-width: ${theme.base.breakpoints.lg}) {
      margin: ${theme.base.spacing.xs};
    }
  `}
`

export const SettingsContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: ${theme.base.spacing.none};
    top: ${theme.base.spacing.xxs};
    text-align: left;
  `}
`
