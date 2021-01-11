import React, { useEffect } from "react";

import Sliders from "./components/Slider/index.jsx";
import ProductSelection from "./components/ProductSelection/index.jsx";
import BestProduct from "./components/BestProduct/index.jsx";
import "./home.scss";
import Product1 from "../../assets/image/slider-1.jpg";
import Product7 from "../../assets/image/product-7.webp";
import Product8 from "../../assets/image/product-8.webp";
import ProductList1 from "../../assets/image/product-list-1.webp";
import ProductList2 from "../../assets/image/product-list-2.webp";
import ProductList3 from "../../assets/image/product-list-3.png";
import ProductList4 from "../../assets/image/product-list-4.png";
import ProductList5 from "../../assets/image/product-list-5.webp";
import ProductList6 from "../../assets/image/product-list-6.webp";
import ProductList7 from "../../assets/image/product-list-7.jpg";
import ProductList8 from "../../assets/image/product-list-8.jpg";
import ProductList9 from "../../assets/image/product-list-9.webp";
import ProductList10 from "../../assets/image/product-list-10.webp";
import ProductList11 from "../../assets/image/product-list-11.webp";
import ProductList12 from "../../assets/image/product-list-12.jpg";

const bestProduct = {
  bestProduct1: {
    index: 1,
    productCard: {
      imgProduct: Product1,
      textSelection: "woman",
      textSubtitle:
        "From Dior's iconic pieces to its latest creations, discover femininity according to Dior.",
      textTitle: "J’ADORE EAU DE PARFUM INFINISSIME",
      textSubtitle2: "INFINITELY WOMAN",
    },
    productList: [
      {
        productImg: ProductList1,
        textTitle: "J’ADORE EAU DE PARFUM INFINISSIME",
        index: 1,
      },
      {
        productImg: ProductList2,
        textTitle: "DIORIFIC - GOLDEN NIGHTS COLLECTION LIMITED EDITIon",
        index: 2,
      },
      {
        productImg: ProductList3,
        textTitle: "BAGS",
        index: 3,
      },
      {
        productImg: ProductList4,
        textTitle: "FASHION JEWELLERY",
        index: 4,
      },
    ],
  },
  bestProduct2: {
    index: 2,
    productCard: {
      imgProduct: Product7,
      textSelection: "man",
      textSubtitle:
        "From House classics to the new arrivals, explore the masculine world of Dior.",
      textTitle: "GIFTS FOR HIM",
      textSubtitle2:
        "Discover a selection of iconic gifts for Him from the latest Dior collections.",
    },
    productList: [
      {
        productImg: ProductList5,
        textTitle: "SNEAKERS",
        index: 1,
      },
      {
        productImg: ProductList6,
        textTitle: "ACCESSORIES",
        index: 2,
      },
      {
        productImg: ProductList7,
        textTitle: "SAUVAGE, LE PARFUM",
        index: 3,
      },
      {
        productImg: ProductList8,
        textTitle: "DIOR HOMME EAU DE TOILETTE",
        index: 4,
      },
    ],
  },
  bestProduct3: {
    index: 3,
    productCard: {
      imgProduct: Product8,
      textSelection: "baby",
      textSubtitle:
        "All the creativity and savoir-faire of the Maison for dressing your little ones.",
      textTitle: "GIFTS FOR NEWBORNS",
      textSubtitle2: "",
    },
    productList: [
      {
        productImg: ProductList9,
        textTitle: "GIRLS",
        index: 1,
      },
      {
        productImg: ProductList10,
        textTitle: "BOYS",
        index: 2,
      },
      {
        productImg: ProductList11,
        textTitle: "BABY GIRLS",
        index: 3,
      },
      {
        productImg: ProductList12,
        textTitle: "BABY BOYS",
        index: 4,
      },
    ],
  },
};

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="home-main">
          <Sliders />
          <ProductSelection />
          <BestProduct bestProduct={bestProduct.bestProduct1} />
          <BestProduct bestProduct={bestProduct.bestProduct2} />
          <BestProduct bestProduct={bestProduct.bestProduct3} />
        </div>
      </div>
    </div>
  );
}

export default Home;
