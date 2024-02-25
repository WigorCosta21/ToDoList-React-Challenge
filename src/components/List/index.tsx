import { useTask } from "../../hooks/useTask";
import { Container } from "../../GlobaStyles";

import { Checkbox } from "../Checkbox";

import RemoveTaskImg from "../../assets/images/icon-cross.svg";

import * as S from "./styles";
import { useTaskFilter } from "../../hooks/useTaskFilter";

export const List = () => {
  const { tasks, removeTask, toggleCheckedTask } = useTask();
  const { filter } = useTaskFilter();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.checked;
    if (filter === "completed") return task.checked;
    return true;
  });

  const handleRemoveTask = (id: number) => {
    removeTask(id);
  };

  const handleToggleChecked = (id: number) => {
    toggleCheckedTask(id);
  };
  return (
    <Container>
      <S.ListContainer>
        {filteredTasks.map((task) => (
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
