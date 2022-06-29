import styled from "styled-components";

export const ButtonWrapper = styled.button`
  width: 100%;
  /* background-color: ${(props) => props.bgC || "red"}; */
  display: grid;
  place-items: center;
  color: ${(props) => props.color || "black"};
  height: ${(props) => props.height || "52px"};
  border: none;
  outline: none;
  /* border: 1px solid ${({ border_color }) => border_color || ""}; */
`;
