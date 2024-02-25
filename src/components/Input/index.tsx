import { useTask } from "../../hooks/useTask";
import { Container } from "../../GlobaStyles";
import * as S from "./styles";
import { useState } from "react";
import { Checkbox } from "../Checkbox";

export const Input = () => {
  const { addTask } = useTask();

  const [taskInput, setTaskInput] = useState("");
  const [checkedInput, setCheckedInput] = useState(false);

  const handleAddTask = () => {
    if (taskInput.trim() === "") {
      return alert("O campo não poder vazio.");
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      task: taskInput,
      checked: checkedInput,
    };

    addTask(newTask);
    setTaskInput("");
    setCheckedInput(false);
  };

  const handleKeyPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <Container>
      <S.InputContainer>
        <S.InputTask
          type="text"
          placeholder="digite sua tarefa"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyUp={handleKeyPressEnter}
        />
        <Checkbox
          id="checkbox-add"
          checked={checkedInput}
          onChange={(e) => setCheckedInput(e.target.checked)}
        />
      </S.InputContainer>
    </Container>
  );
};
