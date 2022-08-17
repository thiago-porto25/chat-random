import styled, { css } from "styled-components"

export const Loader = styled.div`
  ${({ theme }) => css`
    &,
    &:after {
      border-radius: 50%;
      width: ${theme.base.spacing.xxxs};
      height: ${theme.base.spacing.xxxs};
    }

    margin: ${theme.base.spacing.none};
    font-size: ${theme.typography.fontSize.qk};
    position: relative;
    user-select: none;
    color: ${theme.colors.pure.transparent};
    border-top: 3px solid ${theme.colors.brand.gray10};
    border-right: 3px solid ${theme.colors.brand.gray10};
    border-bottom: 3px solid ${theme.colors.brand.gray10};
    border-left: 3px solid ${theme.colors.brand.gray20};
    transform: translateZ(0);
    animation: load8 1.1s infinite linear;

    @keyframes load8 {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`
