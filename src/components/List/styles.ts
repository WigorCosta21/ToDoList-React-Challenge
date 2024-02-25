import styled from "styled-components";

export const ListContainer = styled.ul`
  margin-top: 24px;
`;

export const ListItem = styled.li`
  font-size: 1.125rem;
  list-style: none;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.bgSecondary};
  color: ${(props) => props.theme.textPrimary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.border};

  span {
    &.checked {
      text-decoration: line-through;
    }
  }

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;

export const BtnRemove = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;
