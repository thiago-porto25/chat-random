import styled, { css } from "styled-components"

export const Container = styled.form`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    box-shadow: 0 -2px 10px ${theme.colors.brand.gray20};
    padding: ${theme.base.spacing.nn};

    @media (min-width: ${theme.base.breakpoints.lg}) {
      padding: ${theme.base.spacing.nn} ${theme.base.spacing.xxxs};
    }

    button {
      flex-shrink: 0;
    }
  `}
`

export const ChatInputContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.base.spacing.sm};
  `}
`
