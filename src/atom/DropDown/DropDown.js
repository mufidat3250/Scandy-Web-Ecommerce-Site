import React, { Component } from "react";

export default class DropDown extends React.Component {
  constructor(prop) {
    super(prop);
  
  }
 
  render() {
    return (
      <DropDown onClick={this.props.onclick}>
        {this.props.children}
      </DropDown>
    );
  }
}
