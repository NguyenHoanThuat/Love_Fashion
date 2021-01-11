import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

import "./discover.scss";

Discover.propTypes = {
  margin: PropTypes.string,
};

Discover.defaultProps = {
  margin: "",
};

const StyledDiv = Styled.div`
  margin: ${(props) => props.margin};
`;

function Discover(props) {
  const { margin } = props;

  return (
    <StyledDiv className="discover" margin={margin}>
      <span className="text-discover">Discover</span>
    </StyledDiv>
  );
}

export default Discover;
