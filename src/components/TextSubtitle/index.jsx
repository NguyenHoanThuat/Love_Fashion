import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

import "./textSubtitle.scss";

TextSubtitle.propTypes = {
  text: PropTypes.string,
  marginBottom: PropTypes.string,
  textAlign: PropTypes.string,
  margin: PropTypes.string,
  fontWeight: PropTypes.string,
};

TextSubtitle.defaultProps = {
  text: "",
  marginBottom: "0px",
  textAlign: "center",
  margin: "0px",
  fontWeight: "",
};

const Subtitle = Styled.div`
    margin: ${(props) => props.margin};
    margin-bottom: ${(props) => props.marginBottom};
    text-align: ${(props) => props.textAlign};
    .text-subtitle {
      font-weight: ${(props) => props.fontWeight};
    }
`;

function TextSubtitle(props) {
  return (
    <Subtitle
      className="subtitle"
      margin={props.margin}
      marginBottom={props.marginBottom}
      textAlign={props.textAlign}
      fontWeight={props.fontWeight}
    >
      <span className="text-subtitle">{props.text}</span>
    </Subtitle>
  );
}

export default TextSubtitle;
