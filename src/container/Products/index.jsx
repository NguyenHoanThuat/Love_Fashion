import React, { useEffect } from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';

// Product.propTypes = {

// };

import TextTitle32Px from "../../components/TextTitle32Px/index.jsx";
import TextSubtitle from "../../components/TextSubtitle/index.jsx";
import Catalog from "./components/Catalog/index.jsx";
import { getCategory } from "../../actions/category.jsx";

import "./product.scss";
import ImgCover from "../../assets/image/img-cover-1.webp";

const Product = ({ _getCategory, category }) => {
  {
    console.log("mmmmmmmmm", category);
    useEffect(() => {
      window.scrollTo(0, 0);
      _getCategory();
    }, [_getCategory]);

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
};

const mapStateToProps = (store) => {
  return {
    category: store.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    _getCategory: () => dispatch(getCategory()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
