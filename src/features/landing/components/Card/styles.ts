import styled, { css } from "styled-components"

export const CardContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    @media (min-width: ${theme.base.breakpoints.lg}) {
      flex-direction: row;
      background-color: ${theme.colors.brand.gray10};
      height: ${theme.base.breakpoints.md};
      border-radius: ${theme.base.borderRadius.md};
      ${theme.base.boxShadow.light};
    }
  `}
`

export const CardImgContainer = styled.section`
  ${({ theme }) => css`
    display: none;
    position: relative;

    img {
      width: 100%;
      height: auto;
    }

    @media (min-width: ${theme.base.breakpoints.lg}) {
      display: flex;
      width: 50%;
      padding: ${theme.base.spacing.nn};
      border-top-left-radius: ${theme.base.borderRadius.md};
      border-bottom-left-radius: ${theme.base.borderRadius.md};
      background-color: ${theme.colors.brand.gray30};
    }
  `}
`

export const CardTabletImageContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;

    div {
      display: flex;
      justify-content: center;
      width: 250px;
      position: relative;

      img {
        width: 100%;
        height: auto;
      }

      @media (min-width: 400px) {
        width: 80%;
      }

      @media (min-width: ${theme.base.breakpoints.md}) {
        width: 50%;
      }
    }

    @media (min-width: ${theme.base.breakpoints.lg}) {
      display: none;
    }
  `}
`

export const CardMainContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: ${theme.base.spacing.xxs} ${theme.base.spacing.xxxs};

    @media (min-width: ${theme.base.breakpoints.lg}) {
      width: 50%;
      padding: ${theme.base.spacing.xxs} ${theme.base.spacing.xxs};
    }
  `}
`

export const CardButtonsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.base.breakpoints.lg}) {
    align-items: start;
  }
`
