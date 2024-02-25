import { useTask } from "../../hooks/useTask";
import { useTaskFilter } from "../../hooks/useTaskFilter";

import { Container } from "../../GlobaStyles";
import * as S from "./styles";

export const Footer = () => {
  const { tasks, clearChecked } = useTask();
  const { filter, setFilter } = useTaskFilter();
  return (
    <Container>
      <S.FooterContainer>
        <S.QuantityItems>
          {tasks.length} item{tasks.length <= 1 ? "" : "s"}
        </S.QuantityItems>
        <S.FilterItems>
          <S.FilterItem
            data-active={filter === "all"}
            onClick={() => setFilter("all")}
          >
            All
          </S.FilterItem>
          <S.FilterItem
            data-active={filter === "active"}
            onClick={() => setFilter("active")}
          >
            Active
          </S.FilterItem>
          <S.FilterItem
            data-active={filter === "completed"}
            onClick={() => setFilter("completed")}
          >
            Completed
          </S.FilterItem>
        </S.FilterItems>
        <S.ClearTask onClick={clearChecked}>Clear Completed</S.ClearTask>
      </S.FooterContainer>
    </Container>
  );
};
