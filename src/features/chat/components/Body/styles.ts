import styled, { css } from "styled-components"

import { IMessageContainer } from "@features/chat/types"

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    max-height: calc(100vh - 144px);
    overflow-y: auto;
    flex: 1;
    position: relative;
    background-color: ${theme.colors.brand.gray10};
    padding: ${theme.base.spacing.none} ${theme.base.spacing.xxxs};

    @media (min-width: ${theme.base.breakpoints.lg}) {
      max-height: calc(100vh - 224px);
    }

    scrollbar-color: ${theme.colors.brand.gray40} ${theme.colors.brand.gray70};

    ::-webkit-scrollbar {
      width: ${theme.base.spacing.qk};
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 0;
      border-radius: ${theme.base.borderRadius.xs};
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.brand.gray40};
      border-radius: ${theme.base.borderRadius.xs};
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.brand.gray50};
    }
  `}
`

export const MessageContainer = styled.div<IMessageContainer>`
  display: flex;
  flex-direction: column;
  align-items: ${({ sent }) => (sent ? "end" : "start")};
  word-break: break-all;
`
