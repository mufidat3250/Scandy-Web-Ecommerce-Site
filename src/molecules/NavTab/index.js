import React from "react";
import {
  NavWrapper,
  StyledLink,
  TabContainer,
  TabContent,
  Image,
  DropDownContainer,
} from "./NavTabStyle";
import { Overlay } from "../../atom/Overlay";
import { DropDown } from "../../atom/DropDown/DropDownStyle";

let navTab = [
  {
    title: "Women",
    link: "/",
  },
  {
    title: "Men",
    link: "/men",
  },
  {
    title: "Kids",
    link: "/kids",
  },
];
export default class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overlay: false,
      modal: false,
    };
    this.handleClick = this.handleClick.bind(this);
    // this.DropDown = this.DropDown.bind(this);
  }
  handleClick() {
    this.setState((state) => {
      if (state.overlay === true) {
        console.log("true");
        return { overlay: false };
      }
      if (state.overlay === false) {
        console.log("false");
        return {
          overlay: true,
        };
      }
    });
  }
  handleDropDown() {
    this.state((state) => {
      console.log(state);
    });
  }

  render() {
    return (
      <>
        {this.state.overlay && <Overlay />}
        <NavWrapper>
          <TabContent>
            {navTab.map(({ title, link }, index) => (
              <StyledLink to={link} key={`navindex-${index}`} className={``}>
                <TabContainer>{title}</TabContainer>
              </StyledLink>
            ))}
          </TabContent>
          <Image src="vectors/BrandIcon.svg" alt="" />
          <DropDownContainer>
            <div>
              <Image src="/vectors/Group1.svg" />
            </div>
            <div>
              <Image src="/vectors/Vector.svg" onClick={this.handleClick} />
            </div>
          </DropDownContainer>
        </NavWrapper>

        <DropDown onclick={this.DropDown}>
          <div className="">My Bag, 3 items</div>
        </DropDown>
      </>
    );
  }
}
