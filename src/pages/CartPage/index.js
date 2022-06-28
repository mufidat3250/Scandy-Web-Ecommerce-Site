import React from "react";
import Layout from "../../Layout.js/index.js";
import {
  CartWrapper,
  CartImage,
  PriceDetail,
  PriceDetailHeading,
  PriceDetailSubtitle,
  SizeContainer,
  SizeHeading,
  SizeCategories,
  ColorWrapper,
  ColorBox,
  ColorTitle,
  ColorContainer,
  SizeBox,
  Price,
  PriceHeading,
  Value
} from "./CartStyle";
let size = ["XS", "S", "M", "L"];
let colors = [
  "rgba(211, 210, 213, 1)",
  "rgba(43, 43, 43, 1)",
  "rgba(15, 100, 80, 1)",
];
export default class Kids extends React.Component {
  render() {
    return (
      <Layout>
        <CartWrapper>
          <CartImage></CartImage>
          <PriceDetail>
            <PriceDetailHeading>Apollo</PriceDetailHeading>
            <PriceDetailSubtitle>Running Short</PriceDetailSubtitle>
            <SizeContainer>
              <SizeHeading>Size:</SizeHeading>
              <SizeCategories>
                {size.map((size, index) => {
                  console.log(index);
                  return (
                    <SizeBox className={`${index === 1 ? "active" : ""}`}>
                      {size}
                    </SizeBox>
                  );
                })}
              </SizeCategories>
            </SizeContainer>
            <ColorWrapper>
              <ColorTitle> COLOR:</ColorTitle>
              <ColorContainer>
                {colors.map((color, index) => {
                  return (
                    <ColorBox
                      color={color}
                      border_color={` ${
                        index === 0 ? "rgba(94, 206, 123, 1)" : ""
                      }`}
                    ></ColorBox>
                  );
                })}
              </ColorContainer>
            </ColorWrapper>
            <Price>
              <PriceHeading>Price:</PriceHeading>
              <Value>$50.00</Value>
            </Price>
          </PriceDetail>
        </CartWrapper>
      </Layout>
    );
  }
}
