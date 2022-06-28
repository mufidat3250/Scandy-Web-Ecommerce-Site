import React from "react";
import {
  NavWrapper,
  StyledLink,
  TabContainer,
  TabContent,
  Image,
  DropDownContainer,
} from "./NavTabStyle";

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
      index: 0,
    };
  }

  render() {
    console.log(this.state);
    return (
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
            <Image src="/vectors/Vector.svg" />
          </div>
        </DropDownContainer>
      </NavWrapper>
    );
  }
}
