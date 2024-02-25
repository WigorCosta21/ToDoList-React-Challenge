import { Container } from "../../GlobaStyles";
import * as S from "./styles";

export const Input = () => {
  return (
    <Container>
      <S.InputContainer>
        <S.InputTask type="text" placeholder="digite sua tarefa" />
      </S.InputContainer>
    </Container>
  );
};
