import React, { children } from "react";
import { LayoutWrapper , Main} from "./LayoutStyle";
import Nav from "../molecules/NavTab";
export default class Layout extends React.Component {
  render() {
    return (
      <LayoutWrapper>
        <Nav />
       <Main>
       {this.props.children}
       </Main>
      </LayoutWrapper>
    );
  }
}
