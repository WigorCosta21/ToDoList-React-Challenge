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

  @media (max-width: 600px) {
    font-size: 0 0.75rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const QuantityItems = styled.p``;

export const FilterItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const FilterItem = styled.li`
  list-style: none;
  cursor: pointer;
  &[data-active="true"] {
    color: #3a7bfd;
  }

  &:hover {
    color: ${(props) => props.theme.textHover};
  }
`;

export const ClearTask = styled.p`
  color: ${(props) => props.theme.textPrimary};
  cursor: pointer;
`;
