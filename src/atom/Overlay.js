import styled from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  background-color: ${(props) => props.backgroundColor || "rgba(0,0,0,0.5)"};
  /* height: 100%; */
  position: absolute;
  top: 4.35rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;
