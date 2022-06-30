import styled from "styled-components";

export const CartHeading = styled.h1`
  font-family: "Raleway";
  margin-top: 5rem;
  margin-bottom: 3.4375rem;
`;
export const CartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .cartItem {
    /* display: flex; */
    /* justify-content: space-between; */
    display: flex;
    flex-direction: column;
    column-gap: 3.4375rem;
  }
  .cart {
    display: flex;
    justify-content: space-between;
    padding-bottom: 3.4375rem;
    padding: 1.5rem 0;
    border-top: 1px solid rgba(229, 229, 229, 1);
  }
  .lastCart {
    border-bottom: 1px solid rgba(229, 229, 229, 1);
  }
  .carosel-wrapper {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 1.5rem;

    .add-subtract-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .box {
        width: 2.8125rem;
        height: 2.8125rem;
        display: grid;
        place-items: center;
        border: 1px solid black;
        font-size: 30px;
      }
      .value {
        display: grid;
        place-items: center;
      }
    }
    .Carosel {
      width: 12.5rem;
      height: auto;
      background-color: red;

      .img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
export const CartTilte = styled.p`
  font-family: "RaleWay";
  font-size: 14px;
  font-weight: 600;
  margin: 0;
`;
export const CartSubtitle = styled.p`
  font-family: "RaleWay";
  font-size: 1.875rem;
  font-weight: 400;
  margin: 1rem 0 1.25rem;
`;

export const CartPrice = styled.p`
  font-family: "RaleWay";
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1.25rem 0;
`;
export const BoxTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  font-family: "Roboto Condensed";
`;
export const ColorContainer = styled.div`
  display: flex;
`;
