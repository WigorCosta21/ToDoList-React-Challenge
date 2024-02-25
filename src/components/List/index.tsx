import { useTask } from "../../hooks/useTask";

import { Checkbox } from "../Checkbox";

import RemoveTaskImg from "../../assets/images/icon-cross.svg";

import { Container } from "../../GlobaStyles";
import * as S from "./styles";

export const List = () => {
  const { tasks, removeTask, toggleCheckedTask } = useTask();

  const handleRemoveTask = (id: number) => {
    removeTask(id);
  };

  const handleToggleChecked = (id: number) => {
    toggleCheckedTask(id);
  };
  return (
    <Container>
      <S.ListContainer>
        {tasks.map((task) => (
          <S.ListItem key={task.id}>
            <S.ContentList>
              <Checkbox
                id={`${task.id}`}
                checked={task.checked}
                onChange={() => handleToggleChecked(task.id)}
              />
              <span className={task.checked ? "checked" : ""}>{task.task}</span>
            </S.ContentList>
            <S.BtnRemove onClick={() => handleRemoveTask(task.id)}>
              <img src={RemoveTaskImg} alt="Ícone X" />
            </S.BtnRemove>
          </S.ListItem>
        ))}
      </S.ListContainer>
    </Container>
  );
};
