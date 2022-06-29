import React from "react";
import Layout from "../../Layout.js/index.js";
import { CartWrapper, CartHeading } from "./CartStyle";

let cartitem = [
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
                <div className="cartItem">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                  <div>
                      
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
