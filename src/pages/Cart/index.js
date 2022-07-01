import React from "react";
import Layout from "../../Layout.js/index.js";
import { ColorBox } from "../../atom/ColorBox/ColorBoxStyle.js";
import {
  CartWrapper,
  CartHeading,
  CartTilte,
  CartSubtitle,
  CartPrice,
  BoxTitle,
  ColorContainer,
} from "./CartStyle";
import Size from "../../atom/SizeBox";

export const cartitem = [
  {
    title: "Apollo",
    description: "Running Short",
    price: "$50.00",
    size: ["XS", "S", "M", "L"],
    color: [
      "rgba(211, 210, 213, 1)",
      "rgba(43, 43, 43, 1)",
      "rgba(15, 100, 80, 1)",
    ],
    image: "/images/ProductD1.png",
  },
  {
    title: "jupiter",
    description: "wayfarer",
    price: "$75.00",
    size: ["S", "M"],
    color: [
      "rgba(211, 210, 213, 1)",
      "rgba(43, 43, 43, 1)",
      "rgba(15, 100, 80, 1)",
    ],
    image: "/images/ProductD2.png",
  },
];
export default class Men extends React.Component {
  render() {
    return (
      <Layout>
        <CartHeading>Cart</CartHeading>
        <div>
          <CartWrapper>
            {cartitem.map((item, index) => {
              return (
                <div
                  className={`cartItem ${
                    index === cartitem.length - 1 ? "lastCart" : ""
                  }`}
                  key={`cartItems ${index}`}
                >
                  <div className="cart">
                    <div>
                      <CartTilte>{item.title}</CartTilte>
                      <CartSubtitle>{item.description}</CartSubtitle>
                      <CartPrice>{item.price}</CartPrice>
                      <BoxTitle>Size:</BoxTitle>
                      <Size size={item.size} />
                      <BoxTitle>Color:</BoxTitle>
                      <ColorContainer>
                        {item.color.map((color, index) => {
                          return (
                            <ColorBox
                              color={color}
                              key={index}
                              border_color={
                                index === 0 ? "rgba(94, 206, 123, 1)" : ""
                              }
                            ></ColorBox>
                          );
                        })}
                      </ColorContainer>
                    </div>
                    <div className="carosel-wrapper">
                      <div className="add-subtract-wrapper">
                        <div className="box">+</div>
                        <div className="value">1</div>
                        <div className="box">-</div>
                      </div>
                      <div className="Carosel">
                        <img src={item.image} alt="" className="img" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </CartWrapper>
        </div>
      </Layout>
    );
  }
}
