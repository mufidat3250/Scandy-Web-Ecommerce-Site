import styled from "styled-components";
export const CategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22.125rem, 1fr));
  gap: 2.5rem;
`;
export const Heading = styled.h1`
  font-weight: 400;
  font-size: 2.625rem;
  margin: 0;
  margin-top: 5rem;
  margin-bottom: 5.4375rem;
  width: fit-content;
`;
export const ProductCard = styled.div`
  background-color: green;
`;
export const CartImageWrapper = styled.div`
  /* padding: 1rem; */
  margin: 1rem;
  background-color: red;
`;
export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;
export const NamePriceWraper = styled.div`
  margin: 0rem 1rem 1rem;
  margin-top: 8px;
  background-color: yellow;
`;
export const Name = styled.p`
  font-size: 1.125rem;
  font-weight: 300;
  margin: 0;
  line-height: 1.5;
`;
export const Price = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5rem;
`;

