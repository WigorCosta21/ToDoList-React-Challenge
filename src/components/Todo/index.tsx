import { useTask } from "../../hooks/useTask";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Input } from "../Input";
import { List } from "../List";
import * as S from "./styles";

export const Todo = () => {
  const { tasks } = useTask();
  return (
    <S.Hero>
      <Header />
      <Input />
      <List />
      {tasks.length > 0 && <Footer />}
    </S.Hero>
  );
};
