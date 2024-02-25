import { Container } from "../../GlobaStyles";

import RemoveTaskImg from "../../assets/images/icon-cross.svg";

import * as S from "./styles";

export const List = () => {
  return (
    <Container>
      <S.ListContainer>
        <S.ListItem>
          <span>JavaScript</span>
          <S.BtnRemove>
            <img src={RemoveTaskImg} alt="Ícone X" />
          </S.BtnRemove>
        </S.ListItem>
        <S.ListItem>
          <span>JavaScript</span>
          <S.BtnRemove>
            <img src={RemoveTaskImg} alt="Ícone X" />
          </S.BtnRemove>
        </S.ListItem>
      </S.ListContainer>
    </Container>
  );
};
