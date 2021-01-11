import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Styled from "styled-components";

import "./productFashion.scss";
import TextSubtitle from "../TextSubtitle/index.jsx";

ProductFashion.propTypes = {
  product: PropTypes.object,
  widthImg: PropTypes.string,
  heightImg: PropTypes.string,
};

ProductFashion.defaultProps = {
  product: {},
  widthImg: "",
  heightImg: "",
};

const StyledDiv = Styled.div`
  width: ${(props) => props.widthImg};
  .product-fashion-img {
    img {
      width: ${(props) => props.widthImg};
      height: ${(props) => props.heightImg};
    }
  }
`;

function ProductFashion(props) {
  const { product, widthImg, heightImg } = props;

  return (
    <StyledDiv
      className="product-fashion"
      widthImg={widthImg}
      heightImg={heightImg}
    >
      <Link to="" className="product-fashion-link">
        <div className="product-fashion-img">
          <img src={product.imageProduct} alt="" />
        </div>
        <div className="product-fashion-information">
          <TextSubtitle
            textAlign="start"
            text={product.titleProduct}
            fontWeight="600"
            margin="10px 0"
          />
          <TextSubtitle textAlign="start" text={product.subtitleProduct} />
        </div>
      </Link>
    </StyledDiv>
  );
}

export default ProductFashion;
