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
  }
`
