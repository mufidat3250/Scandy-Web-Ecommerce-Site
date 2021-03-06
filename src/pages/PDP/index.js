import React from "react";
import Layout from "../../Layout.js/index.js";
import Button from "../../atom/Button/index.js";
import {
  PDPWrapper,
  PDPImage,
  PriceDetail,
  PriceDetailHeading,
  PriceDetailSubtitle,
  Price,
  Title,
  Value,
  ButtonContainer,
  Description,
  ImageListing,
  ImageModel,
} from "./PDPStyle";
import ColorBox from "../../atom/ColorBox/index.js";
import SizeBox from "../../atom/SizeBox";
let colors = [
  "rgba(211, 210, 213, 1)",
  "rgba(43, 43, 43, 1)",
  "rgba(15, 100, 80, 1)",
];
let size = ["XS", "S", "M", "L"];
let imageListing = [
  {
    image: "/images/Image3.png",
  },
  {
    image: "/images/Image3.png",
  },
  {
    image: "/images/Image3.png",
  },
];
export default class Kids extends React.Component {
  render() {
    return (
      <Layout>
        <PDPWrapper>
          <PDPImage>
            <ImageListing>
              {imageListing.map(({ image }, index) => {
                return (
                  <img
                    src={image}
                    key={`image${index}`}
                    className="img"
                    alt=""
                  />
                );
              })}
            </ImageListing>
            <ImageModel>
              <img src="/images/Image3.png" alt="" className="imgModel" />
            </ImageModel>
          </PDPImage>
          <PriceDetail>
            <PriceDetailHeading>Apollo</PriceDetailHeading>
            <PriceDetailSubtitle>Running Short</PriceDetailSubtitle>
            {/* <SizeBox size={size} /> */}
            {/* <ColorBox colors={colors} /> */}
            <Price>
              <Title>Price:</Title>
              <Value>$50.00</Value>
            </Price>
            <ButtonContainer>
              <Button bgColor="rgba(94, 206, 123, 1)" color={"white"}>
                ADD TO CART
              </Button>
            </ButtonContainer>
            <Description>
              Find stunning women's cocktail dresses and party dresses. Stand
              out in lace and metallic cocktail dresses and party dresses from
              all your favorite brands.
            </Description>
          </PriceDetail>
        </PDPWrapper>
      </Layout>
    );
  }
}
