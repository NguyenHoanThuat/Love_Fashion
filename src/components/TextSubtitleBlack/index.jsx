import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

import "./textBlack.scss";

TextSubtitleBlack.propTypes = {
  text: PropTypes.string,
  margin: PropTypes.string,
};

TextSubtitleBlack.defaultProps = {
  text: "",
  margin: "0px",
};

const StyledDiv = Styled.div`
    margin: ${(props) => props.margin};
`;

function TextSubtitleBlack(props) {
  return (
    <StyledDiv className="subtitle-black" margin={props.margin}>
      <span className="text-subtitle-black">{props.text}</span>
    </StyledDiv>
  );
}

export default TextSubtitleBlack;
