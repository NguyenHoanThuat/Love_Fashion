import React from "react";
import PropTypes from "prop-types";

import "./productContent.scss";

import TextSubtitleBlack from "../../../../components/TextSubtitleBlack/index.jsx";
import TextSubtitle from "../../../../components/TextSubtitle/index.jsx";
import TextTitle from "../../../../components/TextTitle/index.jsx";
import Discover from "../../../../components/Discover";

ProductContent.propTypes = {
  obj: PropTypes.object,
};

ProductContent.defaultProps = {
  obj: {},
};

function ProductContent(props) {
  return (
    <div>
      {props.obj.class === "product-content" ? (
        <div className={props.obj.class}>
          <div className="img-product">
            <img
              src={props.obj.image}
              alt="product"
              className="product-image"
            />
          </div>
          <div className="information-product">
            <TextSubtitleBlack text={props.obj.subtitleBlack} margin="10px 0" />
            <TextSubtitle text={props.obj.subtitle} textAlign="start" />
          </div>
        </div>
      ) : (
        <div className={props.obj.class}>
          <div className="img-product">
            <img
              src={props.obj.image}
              alt="product"
              className="product-image"
            />
          </div>
          <div className="information-product">
            <TextTitle
              text={props.obj.title}
              textAlign="center"
              margin="10px 0"
            />
            <TextSubtitle text={props.obj.subtitle} margin="10px 0" />
            <Discover />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductContent;
