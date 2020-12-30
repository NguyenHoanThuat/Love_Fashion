import React, { useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PlayArrow, Pause } from "@material-ui/icons";

import ImageSlider1 from "../../../../assets/image/slider-1.jpg";
import ImageSlider2 from "../../../../assets/image/slider-2.webp";
import ImageSlider3 from "../../../../assets/image/slider-3.webp";
import ImageSlider4 from "../../../../assets/image/slider-4.webp";
import "./slider.scss";

function Sliders() {
  const ref = useRef({});

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
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
    <div className="slider">
      <div className="slider-main">
        <Slider ref={ref} {...settings}>
          <div className="slider-content">
            <div className="slider-img">
              <Link className="slider-link" to="">
                <img
                  src={ImageSlider1}
                  alt="slider-img"
                  className="slider-img"
                />
              </Link>
            </div>
            <div className="slider-click">
              <Link className="slider-link" to="">
                <div className="slider-subtitle">
                  <span className="subtitle-text">fragrance</span>
                </div>
                <div className="slider-title">
                  <span className="title-text">
                    j'adore eau de parfum infinissime
                  </span>
                </div>
                <div className="slider-button">
                  <span className="button-text">discover</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="slider-content">
            <div className="slider-img">
              <Link className="slider-link" to="">
                <img
                  src={ImageSlider2}
                  alt="slider-img"
                  className="slider-img"
                />
              </Link>
            </div>
            <div className="slider-click">
              <Link className="slider-link" to="">
                <div className="slider-subtitle">
                  <span className="subtitle-text">fragrance</span>
                </div>
                <div className="slider-title">
                  <span className="title-text">maison christian dior</span>
                </div>
                <div className="slider-button">
                  <span className="button-text">discover</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="slider-content">
            <div className="slider-img">
              <Link className="slider-link" to="">
                <img
                  src={ImageSlider3}
                  alt="slider-img"
                  className="slider-img"
                />
              </Link>
            </div>
            <div className="slider-click">
              <Link className="slider-link" to="">
                <div className="slider-subtitle">
                  <span className="subtitle-text">woman's fashion</span>
                </div>
                <div className="slider-title">
                  <span className="title-text">gifts for her</span>
                </div>
                <div className="slider-button">
                  <span className="button-text">discover</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="slider-content">
            <div className="slider-img">
              <Link className="slider-link" to="">
                <img
                  src={ImageSlider4}
                  alt="slider-img"
                  className="slider-img"
                />
              </Link>
            </div>
            <div className="slider-click">
              <Link className="slider-link" to="">
                <div className="slider-subtitle">
                  <span className="subtitle-text">men's fashion</span>
                </div>
                <div className="slider-title">
                  <span className="title-text">gifts for him</span>
                </div>
                <div className="slider-button">
                  <span className="button-text">discover</span>
                </div>
              </Link>
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
  );
}

export default Sliders;
