import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

import "./tabVideo.scss";
import TextSubtitle from "../../../../components/TextSubtitle";

TabVideo.propTypes = {
  obj: PropTypes.object,
  borderTop: PropTypes.string,
};

TabVideo.defaultProps = {
  obj: {},
  borderTop: "",
};

const StyledDiv = Styled.div`
  border-top: ${(props) => props.borderTop};
`;

function TabVideo(props) {
  return (
    <StyledDiv borderTop={props.borderTop} className="product-video">
      <div className="product-video-main">
        <video
          src={props.obj.video}
          controls="controls"
          width="100%"
          className="product-video-content"
        ></video>
        <TextSubtitle
          margin="30px"
          text="The tuberose from Grasse is harvested at dusk, when it exhales all the power of its fragrance. The extraction of flowers is suitable for the ancestral method of enfleurage, giving the tuberose its unique, infinitely feminine wake."
        />
      </div>
    </StyledDiv>
  );
}

export default TabVideo;
