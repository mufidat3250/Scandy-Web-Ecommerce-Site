import styled from "styled-components";

export const PDPWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.2fr;
  grid-gap: 6.25rem;
  margin-top: 5rem;
`;
export const PriceDetail = styled.div`
  margin-bottom: 2.6875rem;
`;
export const PDPImage = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2.5rem;
`;
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
export const ButtonContainer = styled.div`
  width: 18.25rem;
`;
export const ImageListing = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: fit-content;
  .img {
    height: 5rem;
    width: 5rem;
  }
`;
export const ImageModel = styled.div`
  height: 31.937rem;

  .imgModel {
    width: 100%;
    height: 100%;
    object-position: inherit;
  }
`;
export const Description = styled.p`
  max-width: 18.25rem;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 1rem;
`;

