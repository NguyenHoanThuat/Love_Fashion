import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import TextSelection from "../../../../components/TextSelection/index.jsx";
import TextSubtitle from "../../../../components/TextSubtitle/index.jsx";
import TextTitle from "../../../../components/TextTitle/index.jsx";
import ProductList from "../ProductList/index.jsx";
import "./bestProduct.scss";

BestProduct.propTypes = {
  bestProduct: PropTypes.object,
};

BestProduct.defaultProps = {
  bestProduct: {},
};

function BestProduct(props) {
  return (
    <div className="best-product">
      <div className="best-product-main">
        <TextSelection
          text={props.bestProduct.productCard.textSelection}
          marginTop="25px"
          marginBottom="10px"
        />
        <TextSubtitle
          text={props.bestProduct.productCard.textSubtitle}
          marginBottom="25px"
        />
        <div className="product-card">
          <div className="product-card-content">
            <Link to="/product" className="product-card-link">
              <div className="product-card-img">
                <img
                  src={props.bestProduct.productCard.imgProduct}
                  alt="product"
                />
              </div>
              <TextTitle
                text={props.bestProduct.productCard.textTitle}
                margin="10px 0"
                textAlign="start"
              />
              <TextSubtitle
                text={props.bestProduct.productCard.textSubtitle2}
                textAlign="start"
              />
            </Link>
          </div>
        </div>
        <ProductList productList={props.bestProduct.productList} />
      </div>
    </div>
  );
}

export default BestProduct;
