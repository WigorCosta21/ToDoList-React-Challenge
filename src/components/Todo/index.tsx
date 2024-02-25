import { Footer } from "../Footer";
import { Header } from "../Header";
import { Input } from "../Input";
import { List } from "../List";
import * as S from "./styles";

export const Todo = () => {
  return (
    <S.Hero>
      <Header />
      <Input />
      <List />
      <Footer />
    </S.Hero>
  );
};
