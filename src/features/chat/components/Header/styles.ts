import styled, { css } from "styled-components"

export const Container = styled.div`
  ${({ theme }) => css`
    z-index: 1;
    width: 100%;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.base.spacing.nn} ${theme.base.spacing.xxxs};
    ${theme.base.boxShadow.light}

    @media (min-width: ${theme.base.breakpoints.lg}) {
      padding: ${theme.base.spacing.nn} ${theme.base.spacing.xxs};
    }
  `}
`
