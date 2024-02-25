import React from "react";

import CheckboxImg from "../../assets/images/icon-check.svg";

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
      <S.Label htmlFor={id}>
        <img
          className={checked ? "imgChecked" : ""}
          src={CheckboxImg}
          alt="Ícone checked"
        />
      </S.Label>
    </S.CheckboxWrapper>
  );
};
