import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

import "./textSelection.scss";

TextSelection.propTypes = {
  text: PropTypes.string,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
};

TextSelection.defaultProps = {
  text: "",
  marginTop: "",
  marginBottom: "",
};

const Selection = Styled.div`
    margin-top: ${(props) => props.marginTop};
    margin-bottom: ${(props) => props.marginBottom};
  `;

function TextSelection(props) {
  return (
    <Selection
      className="selection"
      marginTop={props.marginTop}
      marginBottom={props.marginBottom}
    >
      <span className="text-selection">{props.text}</span>
    </Selection>
  );
}

export default TextSelection;
