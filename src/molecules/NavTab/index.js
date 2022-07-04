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
import {
  DropDown,
  DropDownWrapper,
  Heading,
  DropDownBody,
  ColorBox,
  Carosel,
  Total,
  DropDownButton,
} from "../../atom/DropDown/DropDownStyle";
import Button from "../../atom/Button";
import { connect } from "react-redux";
import {
  changeCategories,
  selectedCategories,
} from "../../store/reducers/actions";
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

const cartitem = [
  {
    title: "Apollo",
    description: "Running Short",
    price: "$50.00",
    size: ["XS", "S", "M", "L"],
    color: [
      "rgba(211, 210, 213, 1)",
      "rgba(43, 43, 43, 1)",
      "rgba(15, 100, 80, 1)",
    ],
    image: "/images/dropDownImg.png",
  },
  {
    title: "jupiter",
    description: "wayfarer",
    price: "$75.00",
    size: ["S", "M"],
    color: [
      "rgba(211, 210, 213, 1)",
      "rgba(43, 43, 43, 1)",
      "rgba(15, 100, 80, 1)",
    ],
    image: "/images/dropDownImg.png",
  },
];
class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overlay: false,
      modal: false,
      currencyDropDown: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
    this.handleCurrencyDropDown = this.handleCurrencyDropDown.bind(this);
  }
  handleClick() {
    this.setState((state) => {
      console.log(state);
      if (state.overlay === false) {
        return { overlay: true, modal: true };
      }
      if (state.overlay === true) {
        return {
          overlay: false,
          modal: false,
        };
      }
    });
  }
  handleDropDown() {
    this.state((state) => {
      console.log(state);
    });
  }

  handleCurrencyDropDown() {
    this.state(() => {});
  }

  componentDidMount() {
    this.props.getCategories(navTab);
  }

  render() {
    console.log(this.props);
    return (
      <>
        {this.state.overlay && <Overlay />}
        <NavWrapper>
          <TabContent>
            {navTab.map(({ title, link }, index) => (
              <StyledLink
                to={link}
                key={`navindex-${index}`}
                className={`${
                  this.props.selectedCategory === title ? "active" : ""
                }`}
                onClick={() => this.props.changeCategory(title)}
              >
                <TabContainer
                  className={`${
                    this.props.selectedCategory === title ? "active" : ""
                  }`}
                >
                  {title}
                </TabContainer>
              </StyledLink>
            ))}
          </TabContent>
          <Image src="vectors/BrandIcon.svg" alt="" />
          <DropDownContainer>
            <div>
              <Image
                src="/vectors/Group1.svg"
                onClick={this.handleCurrencyDropDown}
              />
            </div>
            <div>
              <Image src="/vectors/Vector.svg" onClick={this.handleClick} />
            </div>
          </DropDownContainer>
        </NavWrapper>
        {this.state.overlay && (
          <DropDown
            onclick={this.state.handleDropDown}
            modal={this.state.modal}
          >
            <DropDownWrapper>
              <Heading>
                <strong>My Bag,</strong> 3 items
              </Heading>
              <DropDownBody>
                {cartitem.map((item, index) => {
                  return (
                    <div className="itemContainer">
                      <div className="itemDiscription">
                        <div>
                          <h1>Apollo Running Short</h1>
                          <p className="price">$50.00</p>
                          <p className="title">Size</p>
                          <div className="size-container">
                            {item.size.map((size, index) => {
                              return (
                                <div className="SizeBox" key={index}>
                                  {size}
                                </div>
                              );
                            })}
                          </div>
                          <p className="title">Color</p>
                          <div className="color-box-container">
                            {item.color.map((item, index) => {
                              return (
                                <ColorBox
                                  backround_color={item}
                                  className="color-box"
                                  key={index}
                                ></ColorBox>
                              );
                            })}
                          </div>
                        </div>
                        <div className="add-subtract-wrapper">
                          <div className="box">+</div>
                          <div className="value">1</div>
                          <div className="box">-</div>
                        </div>
                      </div>
                      <Carosel className="carosel-wrapper">
                        <div className="Carosel">
                          <img src={item.image} alt="" className="img" />
                        </div>
                      </Carosel>
                    </div>
                  );
                })}
              </DropDownBody>
              <Total>
                <p className="total">Total</p>
                <p className="value">$200.00</p>
              </Total>
              <DropDownButton>
                <Button color="black" border_color="black" bgColor="white">
                  View bag
                </Button>
                <Button color="white" bgColor="#5ECE7B">
                  CHECK OUT
                </Button>
              </DropDownButton>
            </DropDownWrapper>
          </DropDown>
        )}

        {this.state.currencyDropDown && <DropDown>i love coding</DropDown>}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    selectedCategory: state.selectedCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: (item) => dispatch(selectedCategories(item)),
    changeCategory: (data) => dispatch(changeCategories(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
