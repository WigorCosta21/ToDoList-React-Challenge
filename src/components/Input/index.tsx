import { useTask } from "../../hooks/useTask";
import { Container } from "../../GlobaStyles";
import * as S from "./styles";
import { useState } from "react";

export const Input = () => {
  const { addTask } = useTask();

  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim() === "") {
      return alert("O campo não poder vazio.");
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      task: taskInput,
      checked: false,
    };

    addTask(newTask);
    setTaskInput("");
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
      </S.InputContainer>
    </Container>
  );
};
