import React from "react";
import {
  CategoriesWrapper,
  Heading,
  Image,
  ProductCard,
  CartImageWrapper,
  Name,
  Price,
  NamePriceWraper,
} from "./CategoriesStyle";
import Layout from "../../Layout.js/index.js";

export default class Categories extends React.Component {
  data = [
    {
      img: "/images/Image3.png",
      name: "Apollo Running Short",
      price: "$50.00",
    },
    {
      img: "/images/Image.png",
      name: "Apollo Running Short",
      price: "$50.00",
    },
    {
      img: "/images/Image2.png",
      name: "Apollo Running Short",
      price: "$50.00",
    },

    {
      img: "/images/Image4.png",
      name: "Apollo Running Short",
      price: "$50.00",
    },
    {
      img: "/images/Image5.png",
      name: "Apollo Running Short",
      price: "$50.00",
    },
    {
      img: "/images/Image.png",
      name: "Apollo Running Short",
      price: "$50.00",
    },
  ];

  render() {
    return (
      <Layout>
        <Heading>Categories</Heading>
        <CategoriesWrapper>
          {this.data.map(({ img, name, price }, index) => {
            return (
              <ProductCard key={`categories${index}`}>
                <CartImageWrapper>
                  <Image src={img} />
                  <div className="Add-to-cart">
                    <img src="vectors/Group1.svg" alt="" />
                  </div>
                </CartImageWrapper>
                <NamePriceWraper>
                  <Name>{name}</Name>
                  <Price>{price}</Price>
                </NamePriceWraper>
              </ProductCard>
            );
          })}
        </CategoriesWrapper>
      </Layout>
    );
  }
}
