import styled from "styled-components";

export const SizeContainer = styled.div``;
export const SizeHeading = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  font-family: "Roboto Condensed";
`;
export const SizeCategories = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;
export const Box = styled.div`
  width: 3.9375rem;
  border: 1px solid #1d1f22;
  height: 2.8125rem;
  margin-right: 0.75rem;
  display: grid;
  place-items: center;

  &.active {
    background-color: black;
    color: white;
  }
`;
