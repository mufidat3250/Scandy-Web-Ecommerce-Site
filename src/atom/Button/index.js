import React from "react";
import { ButtonWrapper } from "./ButtonStyle";

export default class Button extends React.Component {
  render() {
    console.log(this.props.bgColor);
    return (
      <ButtonWrapper bgC={this.props.bgColor} color={this.props.color}>
        {this.props.children}
      </ButtonWrapper>
    );
  }
}
