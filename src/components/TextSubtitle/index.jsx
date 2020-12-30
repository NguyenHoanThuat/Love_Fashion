import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

import "./textSubtitle.scss";

TextSubtitle.propTypes = {
  text: PropTypes.string,
  marginBottom: PropTypes.string,
  textAlign: PropTypes.string,
  margin: PropTypes.string,
};

TextSubtitle.defaultProps = {
  text: "",
  marginBottom: "0px",
  textAlign: "center",
  margin: "0px",
};

const Subtitle = Styled.div`
    margin: ${(props) => props.margin};
    margin-bottom: ${(props) => props.marginBottom};
    text-align: ${(props) => props.textAlign};
`;

function TextSubtitle(props) {
  return (
    <Subtitle
      className="subtitle"
      margin={props.margin}
      marginBottom={props.marginBottom}
      textAlign={props.textAlign}
    >
      <span className="text-subtitle">{props.text}</span>
    </Subtitle>
  );
}

export default TextSubtitle;
