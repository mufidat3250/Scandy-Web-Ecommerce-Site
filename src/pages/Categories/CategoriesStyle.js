import styled from "styled-components";
export const CategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(22.125rem, 1fr));
  gap: 2.5rem;
  padding: 1rem;
`;
export const Heading = styled.h1`
  font-weight: 400;
  font-size: 2.625rem;
  margin: 0;
  margin-top: 5rem;
  margin-bottom: 5.4375rem;
  width: fit-content;
  padding-left: 1rem;
`;
export const ProductCard = styled.div`
  cursor: pointer;
  overflow-y: hidden;
  position: relative;

  .Add-to-cart {
    background-color: #5ece7b;
    position: absolute;
    height: 3.25rem;
    width: 3.25rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    top: 78%;
    right: 8%;
    display: none;
  }

  &:hover {
    box-shadow: 0px 4px rgba(168, 172, 176, 0.19);
    border-radius: 10px;

    .Add-to-cart {
      display: block;
      display: grid;
      place-items: center;
    }
  }
`;
export const CartImageWrapper = styled.div`
  margin: 1rem;
  position: relative;
`;
export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;
export const NamePriceWraper = styled.div`
  margin: 0rem 1rem 1rem;
  margin-top: 8px;
  position: relative;
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
