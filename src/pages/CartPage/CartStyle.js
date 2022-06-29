import styled from "styled-components";

export const CartWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.2fr;
  grid-gap: 6.25rem;
  margin-top: 5rem;
`;
export const PriceDetail = styled.div`
  /* display: ; */
  margin-bottom: 2.6875rem;
`;
export const CartImage = styled.div``;
export const PriceDetailHeading = styled.p`
  font-size: 1.875rem;
  font-weight: 600;
  font-family: "Raleway";
  margin: 0;
`;
export const PriceDetailSubtitle = styled.p`
  font-size: 1.875rem;
  font-family: "RaleWay";
  font-weight: 400;
  margin-top: 1rem;
`;
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
export const SizeBox = styled.div`
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

export const Price = styled.div`
  margin-bottom: 1.25rem;
`;
export const PriceHeading = styled.p`
  font-family: "Roboto Condensed";
`;
export const Value = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Raleway";
  line-height: 0.75;
`;
