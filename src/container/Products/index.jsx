import React from "react";
// import PropTypes from 'prop-types';

// Product.propTypes = {

// };

import TextTitle32Px from "../../components/TextTitle32Px/index.jsx";
import TextSubtitle from "../../components/TextSubtitle/index.jsx";
import Catalog from "./components/Catalog/index.jsx";

import "./product.scss";
import ImgCover from "../../assets/image/img-cover-1.webp";

function Product() {
  return (
    <div className="product">
      <div className="container">
        <div className="product-main">
          <TextTitle32Px text="J'ADORE" />
          <div className="product-cover">
            <img src={ImgCover} alt="product-cover" className="img-cover" />
          </div>
          <TextSubtitle text="Accentuating the freshness and sensuality of the most beautiful flowers, its iconic floral bouquet of J'adore is a magnificently balanced and multifaceted vision – an ode to fearless women." />
          <Catalog />
        </div>
      </div>
    </div>
  );
}

export default Product;
