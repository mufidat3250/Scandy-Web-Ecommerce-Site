import React, { Component } from "react";
import { ColorWrapper, ColorContainer, Title } from "./ColorBoxStyle";

export default class ColorBox extends Component {
  constructor(prop) {
    super(prop);
    console.log(prop);
  }
  render() {
    return (
      <ColorWrapper>
        {/* <Title> COLOR:</Title> */}
        <ColorContainer>
          {this.props.colors.map((item, index) => {
            return <ColorBox>{item}</ColorBox>;
          })}
        </ColorContainer>
      </ColorWrapper>
    );
  }
}
