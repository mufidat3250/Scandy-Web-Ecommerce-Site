import React from "react";
import {
  WomenWrapper,
  Heading,
  Image,
  ProductCard,
  CartImageWrapper,
  Name,
  Price,
  NamePriceWraper,
} from "./WomenStyle";
import Layout from "../../Layout.js";

export default class Women extends React.Component {
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
        <WomenWrapper>
          {this.data.map(({ img, name, price }, index) => {
            return (
              <ProductCard>
                <CartImageWrapper>
                  <Image src={img} />
                </CartImageWrapper>
                <NamePriceWraper>
                  <Name>{name}</Name>
                  <Price>{price}</Price>
                </NamePriceWraper>
              </ProductCard>
            );
          })}
        </WomenWrapper>
      </Layout>
    );
  }
}
