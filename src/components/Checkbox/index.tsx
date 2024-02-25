import React from "react";

import * as S from "./styles";

interface ICheckboxProps {
  id: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox = ({ checked, onChange, id }: ICheckboxProps) => {
  return (
    <S.CheckboxWrapper>
      <S.InputCheckbox
        checked={checked}
        onChange={onChange}
        type="checkbox"
        id={id}
      />
      <S.Label htmlFor={id}></S.Label>
    </S.CheckboxWrapper>
  );
};
