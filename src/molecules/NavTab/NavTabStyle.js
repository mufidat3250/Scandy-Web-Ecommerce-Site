import styled from "styled-components";
export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding-left: 1rem;
  padding-right: 1rem;
`;
export const TabContent = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const TabContainer = styled.p`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 25px;
  color: ${(props) => props.color || "black"};

  &.active {
    border-bottom: "green";
  }
`;
export const StyledLink = styled.div`
  text-decoration: none;
  border-bottom: 1px solid transparent;
  margin-right: 8px;

  &.active {
    border-bottom: 1px solid #5ece7b;
  }
`;
export const Image = styled.img`
  cursor: pointer;
`;
export const DropDownContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
