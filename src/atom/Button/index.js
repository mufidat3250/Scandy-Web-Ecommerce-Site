import React from "react";
import { ButtonWrapper } from "./ButtonStyle";

export default class Button extends React.Component {
  render() {
    console.log(this.props.bgColor);
    return (
      <ButtonWrapper bgC={this.props.bgColor} border_color={this.props.border_color} color={this.props.color}>
        {this.props.children}
      </ButtonWrapper>
    );
  }
}
