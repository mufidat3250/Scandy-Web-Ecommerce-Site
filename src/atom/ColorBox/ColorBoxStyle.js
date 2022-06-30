import styled from "styled-components";
export const ColorWrapper = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 2.25rem;
`;
export const Title = styled.h1`
  font-size: 1.125rem;
  font-weight: 700;
  font-family: "Roboto Condensed";
`;

export const ColorContainer = styled.div`
  display: flex;
`;
export const ColorBox = styled.div`
  background-color: ${(props) => props.color};
  height: 2rem;
  width: 2rem;
  border: 1px solid ${(props) => props.border_color || ""};
  margin-right: 0.5rem;
  cursor: pointer;
`;
