import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 540px;
  width: 100%;
  margin: 0 auto;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.textSecondary};
`;

export const BntTheme = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;
