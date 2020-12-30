import React from "react";
import PropTypes from "prop-types";

import "./productContent.scss";

import TextSubtitleBlack from "../../../../components/TextSubtitleBlack/index.jsx";
import TextSubtitle from "../../../../components/TextSubtitle/index.jsx";
import TextTitle from "../../../../components/TextTitle/index.jsx";

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
            <TextSubtitleBlack text="J'adore" margin="10px 0" />
            <TextSubtitle text="Eau de parfum infinissime" textAlign="start" />
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
              text="J’ADORE EAU DE PARFUM INFINISSIME"
              textAlign="center"
              margin="10px 0"
            />
            <TextSubtitle
              text="Discover a new J’adore: an endless burst of flowers released in an infinitely exalted bouquet."
              margin="10px 0"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductContent;
