import styled from "styled-components";

export const CheckboxWrapper = styled.div`
  position: relative;
`;

export const InputCheckbox = styled.input`
  display: none;
  cursor: pointer;

  &:checked + label::before {
    background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    border: 2px solid white;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
  }
`;
