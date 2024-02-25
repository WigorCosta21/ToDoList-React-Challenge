import styled from "styled-components";

export const InputContainer = styled.div`
  margin-top: 48px;
`;

export const InputTask = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  outline: none;
  color: ${(props) => props.theme.textPrimary};
  background-color: ${(props) => props.theme.bgSecondary};
  font-size: 1.125rem;
`;
