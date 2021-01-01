import React from "react";
import PropTypes from "prop-types";

import "./productXs2.scss";
import TextSubtitleBlack from "../../../../components/TextSubtitleBlack/index.jsx";
import TextSubtitle from "../../../../components/TextSubtitle/index.jsx";

ProductXs2.propTypes = {
  obj: PropTypes.object,
};

ProductXs2.defaultProps = {
  obj: {},
};

function ProductXs2(props) {
  return (
    <div>
      {props.obj.class === "product-content" ? (
        <div className="product-xs-2-content">
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
      ) : null}
    </div>
  );
}

export default ProductXs2;
