import { Component, React } from "react";
import { SizeContainer, SizeHeading, SizeCategories, Box } from "./SizeBox";

export default class SizeBox extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <SizeContainer>
        {/* <SizeHeading>Size:</SizeHeading> */}
        <SizeCategories>
          {this.props.size.map((item, index) => (
            <Box
              className={`${index === 1 ? "active" : ""}`}
              key={`size-key-${index}`}
            >
              {item}
            </Box>
          ))}
        </SizeCategories>
      </SizeContainer>
    );
  }
}
