import styled from "styled-components"

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;

  a {
    width: fit-content;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  flex: 1;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    &:last-of-type {
      border: 1px solid ${({ theme }) => theme.colors.brand.gray20};
      color: ${({ theme }) => theme.colors.brand.gray100};
    }
  }
`
