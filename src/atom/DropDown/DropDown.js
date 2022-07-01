import React, { Component } from "react";

export default class DropDown extends React.Component {
  constructor(prop) {
    super(prop);

    this.onclick = prop.onclick;
  }

  render() {
    return (
      <DropDown
        onClick={this.props.onclick}
        className={this.props.modal ? "slideOut" : "slideIn"}
      >
        {this.props.children}
      </DropDown>
    );
  }
}
