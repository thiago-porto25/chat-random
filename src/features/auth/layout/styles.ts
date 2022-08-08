import styled, { css } from "styled-components"

export const AuthContainer = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    min-height: 100vh;
    max-height: 100vh;

    background-color: ${theme.colors.pure.white};
    padding: ${theme.base.spacing.xxs} ${theme.base.spacing.xxxs};
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: auto;

    * {
      flex-shrink: 0;
    }

    @media (min-width: ${theme.base.breakpoints.md}) {
      border-radius: ${theme.base.borderRadius.md};
      padding: ${theme.base.spacing.xxs};
      max-width: 480px;
      min-width: 480px;
      max-height: 760px;
      min-height: 760px;
      height: 100%;
    }
  `}
`

export const AuthCloseIconContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: ${theme.base.spacing.xxxs};
    right: ${theme.base.spacing.xxxs};

    svg {
      width: ${theme.base.spacing.nn};
      height: ${theme.base.spacing.nn};
    }
  `}
`
