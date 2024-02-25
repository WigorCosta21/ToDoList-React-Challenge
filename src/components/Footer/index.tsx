import { Container } from "../../GlobaStyles";
import * as S from "./styles";

export const Footer = () => {
  return (
    <Container>
      <S.FooterContainer>
        <S.QuantityItems>5 items</S.QuantityItems>
        <S.FilterItems>
          <S.FilterItem>All</S.FilterItem>
          <S.FilterItem>Active</S.FilterItem>
          <S.FilterItem>Completed</S.FilterItem>
        </S.FilterItems>
        <S.ClearTask>Clear Completed</S.ClearTask>
      </S.FooterContainer>
    </Container>
  );
};
