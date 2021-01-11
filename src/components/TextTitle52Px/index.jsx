import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

import "./textTitle52Px.scss";

TextTitle52Px.propTypes = {
  text: PropTypes.string,
  fontWeight: PropTypes.string,
};

TextTitle52Px.defaultProps = {
  text: "",
  fontWeight: "",
};

const StyledDiv = Styled.div`
    font-weight: ${(props) => props.fontWeight}
`;

function TextTitle52Px(props) {
  const { fontWeight } = props;
  return (
    <StyledDiv className="title-52-px" fontWeight={fontWeight}>
      <span className="text-title-52-px">{props.text}</span>
    </StyledDiv>
  );
}

export default TextTitle52Px;
