import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

import "./textTitle.scss";

TextTitle.propTypes = {
  text: PropTypes.string,
  textAlign: PropTypes.string,
  margin: PropTypes.string,
};

TextTitle.defaultProps = {
  text: "",
  textAlign: "center",
  margin: "0px",
};

const Title = Styled.div`
    margin: ${(props) => props.margin};
    text-align: ${(props) => props.textAlign};
`;

function TextTitle(props) {
  return (
    <Title className="title" margin={props.margin} textAlign={props.textAlign}>
      <span className="text-title">{props.text}</span>
    </Title>
  );
}

export default TextTitle;
