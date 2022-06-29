import React from "react";
import { ButtonWrapper } from "./ButtonStyle";

export default class Button extends React.Component {
  render() {
    console.log(this.props.bgColor);
    return <ButtonWrapper>{this.props.children}</ButtonWrapper>;
  }
}
