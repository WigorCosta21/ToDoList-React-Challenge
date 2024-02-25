import { useTask } from "../../hooks/useTask";
import { Container } from "../../GlobaStyles";

import RemoveTaskImg from "../../assets/images/icon-cross.svg";

import * as S from "./styles";

export const List = () => {
  const { tasks, removeTask } = useTask();

  const handleRemoveTask = (id: number) => {
    removeTask(id);
  };

  return (
    <Container>
      <S.ListContainer>
        {tasks.map((task) => (
          <S.ListItem key={task.id}>
            <span>{task.task}</span>
            <S.BtnRemove onClick={() => handleRemoveTask(task.id)}>
              <img src={RemoveTaskImg} alt="Ícone X" />
            </S.BtnRemove>
          </S.ListItem>
        ))}
      </S.ListContainer>
    </Container>
  );
};
