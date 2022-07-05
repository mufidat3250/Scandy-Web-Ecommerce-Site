import React from "react";
import { CurrencyDropDownWrapper } from "./currencyDropDownStyle";

export default class CurrencyDropDown extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <CurrencyDropDownWrapper>{this.props.children}</CurrencyDropDownWrapper>
    );
  }
}
