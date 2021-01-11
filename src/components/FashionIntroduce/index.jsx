import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Styled from "styled-components";

import "./fashionIntroduce.scss";
import TextTitle32Px from "../TextTitle32Px/index.jsx";
import Discover from "../Discover/index.jsx";

FashionIntroduce.propTypes = {
  introduceObj: PropTypes.object,
  margin: PropTypes.string,
  discover: PropTypes.bool,
};

FashionIntroduce.defaultProps = {
  introduceObj: {},
  margin: "",
  discover: false,
};

const StyledDiv = Styled.div`
    width: ${(props) => props.widthIntroduce};
    margin: ${(props) => props.margin};
    .introduce-img {
        height: ${(props) => props.heightIntroduce};
    }
`;

function FashionIntroduce(props) {
  const { introduceObj, margin, discover } = props;

  return (
    <StyledDiv
      className="landing-introduce"
      widthIntroduce={introduceObj.widthImg}
      heightIntroduce={introduceObj.heightImg}
      margin={margin}
    >
      <Link to="" className="landing-introduce-link">
        <div className="img-landing-introduce">
          <img
            src={introduceObj.imgIntroduce}
            alt="introduce"
            className="introduce-img"
          />
        </div>
        <TextTitle32Px
          text={introduceObj.titleIntroduce}
          textTransform="uppercase"
          textAlign="start"
          fontWeight="400"
        />
        {discover === true ? <Discover margin="15px 0 15px 0" /> : null}
      </Link>
    </StyledDiv>
  );
}

export default FashionIntroduce;
