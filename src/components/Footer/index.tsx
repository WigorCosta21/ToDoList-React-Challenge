import { Container } from "../../GlobaStyles";
import { useTask } from "../../hooks/useTask";
import * as S from "./styles";

export const Footer = () => {
  const { tasks } = useTask();

  return (
    <Container>
      <S.FooterContainer>
        <S.QuantityItems>
          {tasks.length} item{tasks.length <= 1 ? "" : "s"}
        </S.QuantityItems>
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
