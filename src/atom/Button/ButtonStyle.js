import styled, { css } from "styled-components";

export const ButtonWrapper = styled.button`
  width: 100%;
  background-color: ${(props) => props.bgC || "red"};
  display: grid;
  place-items: center;
  color: ${(props) => props.color || "black"};
  height: ${(props) => props.height || "52px"};
  border: none;
  outline: none;
  border: 1px solid ${(props) => props.border_color || "none"};
  cursor: pointer;
  font-weight: 600;
  font-size: ${(props) => props.size || "16px"};
  ${(props) =>
    props.outline &&
    css`
      background-color: transparent;
      border: 1px solid black;
    `}
`;
