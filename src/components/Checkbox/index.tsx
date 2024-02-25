import React from "react";
import * as S from "./styles";

interface ICheckboxProps {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox = ({ checked, onChange }: ICheckboxProps) => {
  return (
    <S.CheckboxWrapper>
      <S.InputCheckbox
        checked={checked}
        onChange={onChange}
        type="checkbox"
        id="checkbox"
      />
      <S.Label htmlFor="checkbox"></S.Label>
    </S.CheckboxWrapper>
  );
};
