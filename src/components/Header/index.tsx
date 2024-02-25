import { useTheme } from "../../hooks/useTheme";

import MoonIcon from "../../assets/images/icon-moon.svg";
import SunIcon from "../../assets/images/icon-sun.svg";

import * as S from "./styles";
import { darkTheme } from "../../themes/dark";
import { Container } from "../../GlobaStyles";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <Container>
      <S.HeaderContainer>
        <S.Title>Todo</S.Title>
        <S.BntTheme onClick={handleToggleTheme}>
          {theme === darkTheme ? (
            <img src={MoonIcon} alt="Ícone da Lua" />
          ) : (
            <img src={SunIcon} alt="Ícone do Sol" />
          )}
        </S.BntTheme>
      </S.HeaderContainer>
    </Container>
  );
};
