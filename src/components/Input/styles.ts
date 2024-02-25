import styled from "styled-components";
import { CheckboxWrapper } from "../Checkbox/styles";

export const InputContainer = styled.div`
  margin-top: 48px;
  position: relative;

  ${CheckboxWrapper} {
    position: absolute;
    top: 12px;
    left: 12px;
  }
`;

export const InputTask = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 4rem;
  border: none;
  border-radius: 8px;
  outline: none;
  color: ${(props) => props.theme.textPrimary};
  background-color: ${(props) => props.theme.bgSecondary};
  font-size: 1.125rem;
`;
