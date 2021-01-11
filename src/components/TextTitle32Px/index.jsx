import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

import "./textTitle32Px.scss";

TextTitle32Px.propTypes = {
  text: PropTypes.string,
  textTransform: PropTypes.string,
  textAlign: PropTypes.string,
  fontWeight: PropTypes.string,
};

TextTitle32Px.defaultProps = {
  text: "",
  textTransform: "",
  textAlign: "",
  fontWeight: "",
};

const StyledDiv = Styled.div`
  .text-title-32-px {
    text-transform: ${(props) => props.textTransform};
    font-weight: ${(props) => props.fontWeight};
  }
  text-align: ${(props) => props.textAlign};
`;

function TextTitle32Px(props) {
  const { text, textTransform, textAlign, fontWeight } = props;

  return (
    <StyledDiv
      className="title-32-px"
      textAlign={textAlign}
      textTransform={textTransform}
      fontWeight={fontWeight}
    >
      <span className="text-title-32-px">{text}</span>
    </StyledDiv>
  );
}

export default TextTitle32Px;
