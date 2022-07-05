import styled from "styled-components";
export const CurrencyDropDownWrapper = styled.div`
  position: absolute;
  right: 7%;
  width: 7.125rem;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  padding-top: 20px;
  padding-bottom: 4px;
  /* padding-left: 20px; */
  z-index: 1500;
  background-color: white;

  .currency-container {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem 0;
    padding-left: 20px;
    background-color: red;
    align-items: center;
  }
`;
