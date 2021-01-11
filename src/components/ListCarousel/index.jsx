import React, { useRef } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductFashion from "../ProductFashion";

import "./listCarousel.scss";

ListCarousel.propTypes = {
  listCarousel: PropTypes.array,
};

ListCarousel.defaultProps = {
  listCarousel: [],
};

function ListCarousel(props) {
  const { listCarousel } = props;
  const ref = useRef({});

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className="list-carousel-product-fashion">
      <div className="list-carousel-product-fashion-main">
        <Slider ref={ref} {...settings}>
          {listCarousel.map((products, index) => {
            return (
              <ProductFashion
                key={index}
                product={products}
                widthImg="435px"
                heightImg="470px"
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default ListCarousel;
