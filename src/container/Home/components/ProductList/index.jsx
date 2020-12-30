import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import TextTitle from "../../../../components/TextTitle/index.jsx";
import "./productList.scss";

ProductList.propTypes = {
  productList: PropTypes.array,
};

ProductList.defaultProps = {
  productList: [],
};

function ProductList(props) {
  const { productList } = props;

  return (
    <div className="product-list">
      <ul className="product-list-main">
        {productList.map((product) => {
          return (
            <li key={product.index} className="product-list-content">
              <Link to="" className="product-list-link">
                <div className="product-list-img">
                  <img src={product.productImg} alt="product" />
                </div>
                <TextTitle text={product.textTitle} textAlign="start" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;
