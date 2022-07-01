import React from "react";
import { LayoutWrapper, Main } from "./LayoutStyle";
import Nav from "../molecules/NavTab";
export default class Layout extends React.Component {
  render() {
    return (
      <LayoutWrapper className="">
        <Nav />
        <Main className="">
          <div className="">{this.props.children}</div>
        </Main>
      </LayoutWrapper>
    );
  }
}
