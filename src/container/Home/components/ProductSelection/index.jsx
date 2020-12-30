import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PlayArrow, Pause } from "@material-ui/icons";

import Product1 from "../../../../assets/image/product-1.webp";
import Product2 from "../../../../assets/image/product-2.webp";
import Product3 from "../../../../assets/image/product-3.webp";
import Product4 from "../../../../assets/image/product-4.webp";
import Product5 from "../../../../assets/image/product-5.webp";
import Product6 from "../../../../assets/image/product-6.webp";
import "./productSelection.scss";

function ProductSelection() {
  const ref = useRef({});

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const ClickPlay = () => {
    ref.current.slickPlay();
  };

  const ClickPause = () => {
    ref.current.slickPause();
  };

  return (
    <div className="product-selection">
      <div className="product-selection-main">
        <div className="product-selection-date">
          <div className="day">
            <span className="text-day">22</span>
          </div>
          <div className="between"></div>
          <div className="mouth">
            <span className="text-mouth">october</span>
          </div>
        </div>
        <div className="selection">
          <span className="text-selection">selection</span>
        </div>
        <div className="product-selection-carousel">
          <div className="carousel-main">
            <Slider ref={ref} {...settings}>
              <div className="carousel-content" style={{ display: "flex" }}>
                <div className="carousel-container">
                  <div className="product-card">
                    <Link to="" className="product-card-link">
                      <div className="card-img">
                        <img
                          src={Product1}
                          alt="product"
                          className="product-img"
                        />
                      </div>
                      <div className="card-information">
                        <div className="subtitle">
                          <span className="text-sub-title">dior book tote</span>
                        </div>
                        <div className="title">
                          <span className="text-title">
                            Latte Multicolor Dior Zodiac Embroidery
                          </span>
                        </div>
                        <div className="button">
                          <span className="text-button">discover</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="product-card">
                    <Link to="" className="product-card-link">
                      <div className="card-img">
                        <img
                          src={Product2}
                          alt="product"
                          className="product-img"
                        />
                      </div>
                      <div className="card-information">
                        <div className="subtitle">
                          <span className="text-sub-title">
                            Oversized Dior Flowers T-Shirt
                          </span>
                        </div>
                        <div className="title">
                          <span className="text-title">
                            Black Cotton Jersey
                          </span>
                        </div>
                        <div className="button">
                          <span className="text-button">discover</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="product-card">
                    <Link to="" className="product-card-link">
                      <div className="card-img">
                        <img
                          src={Product3}
                          alt="product"
                          className="product-img"
                        />
                      </div>
                      <div className="card-information">
                        <div className="subtitle">
                          <span className="text-sub-title">Card Holder</span>
                        </div>
                        <div className="title">
                          <span className="text-title">
                            Black Dior Oblique Galaxy Leather
                          </span>
                        </div>
                        <div className="button">
                          <span className="text-button">discover</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="carousel-content">
                <div className="carousel-container">
                  <div className="product-card">
                    <Link to="" className="product-card-link">
                      <div className="card-img">
                        <img
                          src={Product4}
                          alt="product"
                          className="product-img"
                        />
                      </div>
                      <div className="card-information">
                        <div className="subtitle">
                          <span className="text-sub-title">
                            Small DiorTravel Vanity Case
                          </span>
                        </div>
                        <div className="title">
                          <span className="text-title">
                            Rose Des Vents Cannage Lambskin
                          </span>
                        </div>
                        <div className="button">
                          <span className="text-button">discover</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="product-card">
                    <Link to="" className="product-card-link">
                      <div className="card-img">
                        <img
                          src={Product5}
                          alt="product"
                          className="product-img"
                        />
                      </div>
                      <div className="card-information">
                        <div className="subtitle">
                          <span className="text-sub-title">
                            Rouge Dior Ink Lip Liner
                          </span>
                        </div>
                        <div className="title">
                          <span className="text-title">
                            An ultra-pigmented and long-lasting felt pen liner.
                          </span>
                        </div>
                        <div className="button">
                          <span className="text-button">discover</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="product-card">
                    <Link to="" className="product-card-link">
                      <div className="card-img">
                        <img
                          src={Product6}
                          alt="product"
                          className="product-img"
                        />
                      </div>
                      <div className="card-information">
                        <div className="subtitle">
                          <span className="text-sub-title">
                            Mini Lady Dior Vanity Case
                          </span>
                        </div>
                        <div className="title">
                          <span className="text-title">
                            Black Cannage Lambskin
                          </span>
                        </div>
                        <div className="button">
                          <span className="text-button">discover</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </Slider>
          </div>

          <div className="button-auto-play">
            <button className="button-auto play" onClick={ClickPlay}>
              <PlayArrow />
            </button>
            <button className="button-auto pause" onClick={ClickPause}>
              <Pause />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSelection;
