import styled from "styled-components";

export const DropDown = styled.div`
  background-color: white;
  z-index: 100;
  position: absolute;
  right: 100px;
  top: 65px;
`;
export const DropDownWrapper = styled.div`
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;
export const Heading = styled.h1`
  font-size: 1rem;
  color: #1d1f22;
  margin-bottom: 3rem;
  font-family: "Raleway";
`;
export const DropDownBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 2.6875rem;
  max-height: 25rem;
  overflow-y: auto;

  .itemContainer {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-column-gap: 0.5rem;
  }
  .itemDiscription {
    display: flex;
    justify-content: space-between;
    h1 {
      max-width: 7rem;
      font-size: 1rem;
      font-family: "Raleway";
      line-height: 1.6;
      font-family: 300;
    }
    .price {
      font-size: 1rem;
      line-height: 1.6;
      font-weight: 500;
      font-family: "Raleway";
    }
    .title {
      font-size: 14px;
      font-family: "Raleway";
      font-weight: 400;
      margin-bottom: 0.5rem;
    }
    .add-subtract-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .box {
        width: 1.5rem;
        height: 1.5rem;
        border: 1px solid rgba(29, 31, 34, 1);
        font-size: 24px;
        display: grid;
        place-items: center;
        cursor: pointer;
      }
      .value {
        font-size: 24px;
        text-align: center;
      }
    }
    .size-container {
      display: flex;
      .SizeBox {
        width: 24px;
        height: 24px;
        margin-right: 0.5rem;
        display: grid;
        place-items: center;
        border: 1px solid #1d1f22;
      }
    }
    .color-box-container {
      display: flex;
    }
  }
`;

export const ColorBox = styled.div`
  background-color: ${(props) => props.backround_color || "black"};
  .color-box {
    background-color: ${(props) => props.backround_color || "black"};
  }
`;
export const Carosel = styled.div`
  display: flex;
  height: 100%;

  .Carosel {
    height: 100%;
    width: 100%;

    img {
      height: 100%;
      object-fit: stretch;
    }
  }
`;
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Raleway";
  color: #1d1f22;

  .total {
    font-size: 1rem;
    font-weight: 500;
  }
  .value {
    font-size: 1rem;
    font-weight: 700;
  }
`;
export const DropDownButton = styled.div`
  display: flex;
  gap: 0.75rem;
  padding-bottom: 2rem;
`;
