import { Container } from "../../GlobaStyles";
import { useTask } from "../../hooks/useTask";
import { useTaskFilter } from "../../hooks/useTaskFilter";
import * as S from "./styles";

export const Footer = () => {
  const { tasks } = useTask();
  const { setFilter } = useTaskFilter();
  return (
    <Container>
      <S.FooterContainer>
        <S.QuantityItems>
          {tasks.length} item{tasks.length <= 1 ? "" : "s"}
        </S.QuantityItems>
        <S.FilterItems>
          <S.FilterItem onClick={() => setFilter("all")}>All</S.FilterItem>
          <S.FilterItem onClick={() => setFilter("active")}>
            Active
          </S.FilterItem>
          <S.FilterItem onClick={() => setFilter("completed")}>
            Completed
          </S.FilterItem>
        </S.FilterItems>
        <S.ClearTask>Clear Completed</S.ClearTask>
      </S.FooterContainer>
    </Container>
  );
};
