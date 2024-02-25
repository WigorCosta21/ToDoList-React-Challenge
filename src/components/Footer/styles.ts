import styled from "styled-components";

export const FooterContainer = styled.footer`
  font-size: 1.125rem;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.textSecondary};
  background-color: ${(props) => props.theme.bgSecondary};
  padding: 1rem;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const QuantityItems = styled.p``;

export const FilterItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const FilterItem = styled.li`
  list-style: none;
  cursor: pointer;
`;

export const ClearTask = styled.p`
  color: ${(props) => props.theme.textPrimary};
  cursor: pointer;
`;
