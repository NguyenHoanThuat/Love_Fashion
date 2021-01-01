import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

import "./text26Light.scss";

Text26Light.propTypes = {
  text: PropTypes.string,
  paddingTop: PropTypes.string,
  borderTop: PropTypes.string,
};

Text26Light.defaultProps = {
  text: "",
  paddingTop: "",
  borderTop: "",
};

const StyleDiv = Styled.div`
    padding-top: ${(props) => props.paddingTop};
    border-top: ${(props) => props.borderTop}
`;

function Text26Light(props) {
  return (
    <StyleDiv
      paddingTop={props.paddingTop}
      borderTop={props.borderTop}
      className="text-26px-light"
    >
      <span className="text">{props.text}</span>
    </StyleDiv>
  );
}

export default Text26Light;
