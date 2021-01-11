import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

import ImgIntroduce from "../../assets/image/introduce-1.webp";
import ImgSelection1 from "../../assets/image/selection-1.jpg";
import ImgSelection2 from "../../assets/image/selection-2.jpg";
import ImgSelection3 from "../../assets/image/selection-3.jpg";
import ImgSelection4 from "../../assets/image/selection-4.jpg";
import ImgProductG1 from "../../assets/image/product-g1.webp";
import ImgProductG2 from "../../assets/image/product-g2.webp";
import ImgProductG3 from "../../assets/image/product-g3.webp";
import ImgProductG4 from "../../assets/image/product-g4.webp";
import ImgProductG5 from "../../assets/image/product-g5.webp";
import ImgProductG6 from "../../assets/image/product-g6.webp";
import ImgProductG7 from "../../assets/image/product-g7.webp";
import ImgProductG8 from "../../assets/image/product-g8.webp";
import ImgIntroduce2 from "../../assets/image/introduce-2.webp";
import ImgIntroduce3 from "../../assets/image/introduce-3.webp";
import ImgIntroduce4 from "../../assets/image/introduce-4.webp";
import imgCarousel1 from "../../assets/image/carousel-1.webp";
import imgCarousel2 from "../../assets/image/carousel-2.webp";
import imgCarousel3 from "../../assets/image/carousel-3.webp";
import imgCarousel4 from "../../assets/image/carousel-4.webp";
import imgCarousel5 from "../../assets/image/carousel-5.webp";
import imgCarousel6 from "../../assets/image/carousel-6.webp";
import imgCarousel7 from "../../assets/image/carousel-7.webp";
import imgCarousel8 from "../../assets/image/carousel-8.webp";
import imgCarousel9 from "../../assets/image/carousel-9.webp";
import imgCarousel10 from "../../assets/image/carousel-10.webp";
import imgCarousel11 from "../../assets/image/carousel-11.webp";
import imgCarousel12 from "../../assets/image/carousel-12.webp";

import "./womanFashion.scss";
import TextTitle52Px from "../../components/TextTitle52Px/index.jsx";
import TextTitle32Px from "../../components/TextTitle32Px/index.jsx";
import FashionSelection from "../../components/FashionSelection";
import ProductFashion from "../../components/ProductFashion";
import FashionIntroduce from "../../components/FashionIntroduce";
import ListCarousel from "../../components/ListCarousel";

// WomanFashion.propTypes = {};

const selection = [
  {
    imageSelection: ImgSelection1,
    titleSelection: "Bags",
  },
  {
    imageSelection: ImgSelection2,
    titleSelection: "READY TO WEAR",
  },
  {
    imageSelection: ImgSelection3,
    titleSelection: "Shoes",
  },
  {
    imageSelection: ImgSelection4,
    titleSelection: "Fashion Jewellery",
  },
];

const products = [
  {
    imageProduct: ImgProductG1,
    titleProduct: "Dior Book Tote",
    subtitleProduct: "Clay-Colored Mesh Embroidery",
  },
  {
    imageProduct: ImgProductG2,
    titleProduct: "Sweater",
    subtitleProduct:
      "Gray Technical Cashmere Jacquard with Fleurs Bibliques Motif",
  },
  {
    imageProduct: ImgProductG3,
    titleProduct: "D-Connect Sneaker",
    subtitleProduct: "Multicolor Technical Fabric with Mille Fleurs Print",
  },
  {
    imageProduct: ImgProductG4,
    titleProduct: "CD Navy Earrings",
    subtitleProduct: "Gold-Finish Metal and White Resin Pearls",
  },
];

const products2 = [
  {
    imageProduct: ImgProductG5,
    titleProduct: "Dior Book Tote",
    subtitleProduct: "Latte Multicolor Dior Zodiac Embroideryy",
  },
  {
    imageProduct: ImgProductG6,
    titleProduct: "T-Shirt",
    subtitleProduct:
      "Ecru Cotton Jersey and Linen with Black Dior Zodiac Motif",
  },
  {
    imageProduct: ImgProductG7,
    titleProduct: "Dior Zodiac Mitzah Scarf",
    subtitleProduct: "White and Black Silk Twill",
  },
  {
    imageProduct: ImgProductG8,
    titleProduct: "D-Connect Sneaker",
    subtitleProduct: "Dior Zodiac Printed Technical Fabric",
  },
];

const introduce1 = {
  imgIntroduce: ImgIntroduce2,
  widthImg: "970px",
  heightImg: "545px",
  titleIntroduce: "Mille Fleurs",
};

const introduce2 = {
  imgIntroduce: ImgIntroduce3,
  widthImg: "970px",
  heightImg: "545px",
  titleIntroduce: "Vanity Cases",
};

const introduce3 = {
  imgIntroduce: ImgIntroduce4,
  widthImg: "1440px",
  heightImg: "620px",
  titleIntroduce: "Dior Chez Moi",
};

const listCarousel1 = [
  {
    imageProduct: imgCarousel1,
    titleProduct: "Small Dior Book Tote",
    subtitleProduct: "Multicolor Mille Fleurs Embroidery",
  },
  {
    imageProduct: imgCarousel2,
    titleProduct: "T-Shirt",
    subtitleProduct:
      "Cotton Jersey and Linen with Multicolor Mille Fleurs Motif",
  },
  {
    imageProduct: imgCarousel3,
    titleProduct: "Dior Granville Espadrille",
    subtitleProduct: "Multicolor Mille Fleurs Embroidered Cotton",
  },
  {
    imageProduct: imgCarousel4,
    titleProduct: "Mille Fleurs Mitzah Scarf",
    subtitleProduct: "White Silk Twill",
  },
  {
    imageProduct: imgCarousel5,
    titleProduct: "Shoulder Strap",
    subtitleProduct: "Multicolor Mille Fleurs de Dior Embroidery",
  },
  {
    imageProduct: imgCarousel6,
    titleProduct: "Medium Lady D-Lite Bag",
    subtitleProduct: "Multicolor Mille Fleurs Embroidery",
  },
  {
    imageProduct: imgCarousel7,
    titleProduct: "Long Pleated Skirt",
    subtitleProduct: "Cotton with Multicolor Mille Fleurs Motif",
  },
];

const listCarousel2 = [
  {
    imageProduct: imgCarousel8,
    titleProduct: "Mini Lady Dior Vanity Case",
    subtitleProduct: "Black Cannage Lambskin",
  },
  {
    imageProduct: imgCarousel9,
    titleProduct: "Small DiorTravel Vanity Case",
    subtitleProduct: "Black Cannage Lambskin",
  },
  {
    imageProduct: imgCarousel10,
    titleProduct: "Small DiorTravel Vanity Case",
    subtitleProduct: "Rose Des Vents Cannage Lambskin",
  },
  {
    imageProduct: imgCarousel11,
    titleProduct: "Small DiorTravel Vanity Case",
    subtitleProduct: "Gray Cannage Lambskin",
  },
  {
    imageProduct: imgCarousel12,
    titleProduct: "Small DiorTravel Vanity Case",
    subtitleProduct: "Beige Cannage Lambskin",
  },
];

function WomanFashion() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-woman-fashion">
      <div className="container">
        <div className="page-woman-fashion-main">
          <TextTitle52Px text="FASHION & ACCESSORIES" fontWeight="600" />
          <div className="fashion-introduce">
            <Link to="" className="fashion-introduce-link">
              <div className="img-introduce">
                <img
                  src={ImgIntroduce}
                  alt="introduce"
                  className="introduce-img"
                />
              </div>
              <TextTitle32Px
                text="Cruise 2020-2021 Collection"
                textTransform="uppercase"
                textAlign="start"
                fontWeight="400"
              />
            </Link>
          </div>
          <FashionSelection selectionList={selection} margin="40px 0 0 0" />
          <div className="list-product-fashion">
            {products.map((product, index) => {
              return (
                <ProductFashion
                  key={index}
                  product={product}
                  widthImg="340px"
                  heightImg="370px"
                />
              );
            })}
          </div>
          <div className="landing-new">
            <div className="landing-new-main">
              <FashionIntroduce introduceObj={introduce1} />
              <ListCarousel listCarousel={listCarousel1} />
            </div>
          </div>
          <div className="landing-new">
            <div className="landing-new-main">
              <FashionIntroduce introduceObj={introduce2} />
              <ListCarousel listCarousel={listCarousel2} />
            </div>
          </div>
          <FashionIntroduce
            introduceObj={introduce3}
            margin="40px 0 0 0"
            discover={true}
          />
          <div className="list-product-fashion">
            {products2.map((product, index) => {
              return (
                <ProductFashion
                  key={index}
                  product={product}
                  widthImg="340px"
                  heightImg="370px"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WomanFashion;
