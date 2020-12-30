import React from "react";
import PropTypes from "prop-types";

import "./textTitle32Px.scss";

TextTitle32Px.propTypes = {
  text: PropTypes.string,
};

TextTitle32Px.defaultProps = {
  text: "",
};

function TextTitle32Px(props) {
  return (
    <div className="title-32-px">
      <span className="text-title-32-px">{props.text}</span>
    </div>
  );
}

export default TextTitle32Px;
