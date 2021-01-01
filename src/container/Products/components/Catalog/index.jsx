import React, { useState } from "react";
import { ViewModule, ViewComfy } from "@material-ui/icons/";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

// Catalog.propTypes = {

// };

import "./catalog.scss";
import ProductContent from "../ProductContent/index.jsx";
import ProductXs2 from "../ProductXs2/index.jsx";
import TabVideo from "../TabVideo/index.jsx";

import Item1 from "../../../../assets/image/item-1.webp";
import Item2 from "../../../../assets/image/item-2.webp";
import Item3 from "../../../../assets/image/item-3.webp";
import Item4 from "../../../../assets/image/item-4.webp";
import Item5 from "../../../../assets/image/item-5.webp";
import Item6 from "../../../../assets/image/item-6.webp";
import Item7 from "../../../../assets/image/item-7.webp";
import Item8 from "../../../../assets/image/item-8.webp";
import Item9 from "../../../../assets/image/item-9.webp";
import Item10 from "../../../../assets/image/item-10.webp";
import Item11 from "../../../../assets/image/item-11.webp";
import Item12 from "../../../../assets/image/item-12.webp";
import Items1 from "../../../../assets/image/Items-1.webp";
import Items2 from "../../../../assets/image/Items-2.webp";
import Items3 from "../../../../assets/image/Items-3.webp";
import Items4 from "../../../../assets/image/Items-4.webp";
import Items5 from "../../../../assets/image/Items-5.webp";
import Items6 from "../../../../assets/image/Items-6.webp";
import Items7 from "../../../../assets/image/Items-7.webp";
import Items8 from "../../../../assets/image/Items-8.webp";
import Items10 from "../../../../assets/image/Items-10.webp";
import Items11 from "../../../../assets/image/Items-11.webp";
import Items12 from "../../../../assets/image/Items-12.webp";

import VideoProduct from "../../../../assets/video/video-1.mp4";
import VideoProduct2 from "../../../../assets/video/video-2.mp4";
import Text26Light from "../../../../components/Text26Light";

const listItem = [
  {
    class: "product-content",
    image: Item1,
    index: 1,
    subtitleBlack: "J'adore",
    subtitle: "Eau de parfum infinissime",
  },
  {
    class: "product-new",
    image: Item2,
    index: 2,
    title: "J’ADORE EAU DE PARFUM INFINISSIME",
    subtitle:
      "Discover a new J’adore: an endless burst of flowers released in an infinitely exalted bouquet.",
  },
  {
    class: "product-content",
    image: Item3,
    index: 3,
    subtitleBlack: "J'adore",
    subtitle: "Eau de parfum",
  },
  {
    class: "product-content",
    image: Item4,
    index: 4,
    subtitleBlack: "J'adore",
    subtitle: "Eau de parfum roller-pearl",
  },
  {
    class: "product-new",
    image: Item5,
    index: 5,
    title: "",
    subtitle:
      "Inspired by the exceptional women who have frequently graced its own history, Dior is unveiling a series of short video portraits shaped by the words of several extraordinary women.",
  },
  {
    class: "product-content",
    image: Item6,
    index: 6,
    subtitleBlack: "J'adore",
    subtitle: "Eau de toilette roller-pearl",
  },
  {
    class: "product-content",
    image: Item7,
    index: 7,
    subtitleBlack: "J'adore",
    subtitle: "Eau de toilette",
  },
  {
    class: "product-content",
    image: Item8,
    index: 8,
    subtitleBlack: "J'adore",
    subtitle: "Absolu",
  },
  {
    class: "product-content",
    image: Item9,
    index: 9,
    subtitleBlack: "J'adore",
    subtitle: "In joy - eau de toilette",
  },
  {
    class: "product-content",
    image: Item10,
    index: 10,
    subtitleBlack: "J'adore",
    subtitle: "L'or",
  },
  {
    class: "product-content",
    image: Item11,
    index: 11,
    subtitleBlack: "J'adore",
    subtitle: "Touche de parfum",
  },
  {
    class: "product-content",
    image: Item12,
    index: 12,
    subtitleBlack: "J'adore",
    subtitle: "Extrait de parfum",
  },
];

const listItem2 = [
  {
    class: "product-content",
    image: Items1,
    index: 1,
    subtitleBlack: "J'adore",
    subtitle: "hair mist - fragrance for the hair",
  },
  {
    class: "product-content",
    image: Items2,
    index: 2,
    subtitleBlack: "J'adore",
    subtitle: "Shower and bath oil",
  },
  {
    class: "product-content",
    image: Items3,
    index: 3,
    subtitleBlack: "J'adore",
    subtitle: "Lait sublime body milk",
  },
  {
    class: "product-content",
    image: Items4,
    index: 4,
    subtitleBlack: "J'adore",
    subtitle: "Huile divine",
  },
  {
    class: "product-content",
    image: Items5,
    index: 5,
    subtitleBlack: "J'adore",
    subtitle: "Body mist",
  },
  {
    class: "product-content",
    image: Items6,
    index: 6,
    subtitleBlack: "",
    subtitle: "",
  },
  {
    class: "product-content",
    image: Items7,
    index: 7,
    subtitleBlack: "J'adore",
    subtitle: "Perfumed deodorant",
  },
  {
    class: "product-content",
    image: Items8,
    index: 8,
    subtitleBlack: "J'adore",
    subtitle: "Beautifying body creme",
  },
  {
    class: "product-content",
    image: Items10,
    index: 9,
    subtitleBlack: "J'adore",
    subtitle: "Dry silky body oil",
  },
  {
    class: "product-content",
    image: Items11,
    index: 10,
    subtitleBlack: "J'adore",
    subtitle: "Silky soap",
  },
  {
    class: "product-content",
    image: Items12,
    index: 11,
    subtitleBlack: "J'adore",
    subtitle: "Gelée d'or ",
  },
];

const video1 = {
  video: VideoProduct,
};

const video2 = {
  video: VideoProduct2,
};

function Catalog() {
  const [xs, setXs] = useState(true);

  const onClickXs4 = () => {
    setXs(true);
  };

  const onClickXs2 = () => {
    setXs(false);
  };

  return (
    <div className="catalog">
      <div className="catalog-main">
        <div className="toolbar">
          <div className="toolbar-main">
            <div className="button-view-item">
              <button className="view-item view-big-item" onClick={onClickXs4}>
                <ViewModule fontSize="large" color="disabled" />
              </button>
            </div>
            <div className="button-view-item">
              <button
                className="view-item view-small-item"
                onClick={onClickXs2}
              >
                <ViewComfy fontSize="large" color="disabled" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid-view-product">
          <div className="title-grid-view">
            <span className="text-title">FRAGRANCES</span>
          </div>
          <div className="grid-view-item">
            <ul className="grid-view-content">
              {listItem.map((item) => {
                if (xs === false && item.class === "product-new") return null;
                return (
                  <li key={item.index} className="item-content">
                    {xs === true ? (
                      <div className="product-xs-4">
                        <Link to="" className="product-link">
                          <ProductContent obj={item} />
                        </Link>
                      </div>
                    ) : (
                      <div className="product-xs-2">
                        <Link to="" className="product-link">
                          <ProductXs2 obj={item} />
                        </Link>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          {xs === true ? (
            <TabVideo obj={video1} borderTop="1px solid #e5e5e5" />
          ) : null}
          <Text26Light
            text="Bath & Body"
            paddingTop="20px"
            borderTop="1px solid #e5e5e5"
          />
          <div className="grid-view-item">
            <ul className="grid-view-content">
              {listItem2.map((item) => {
                if (xs === false && item.class === "product-new") return null;
                return (
                  <li key={item.index} className="item-content">
                    {xs === true ? (
                      <div className="product-xs-4">
                        <Link to="" className="product-link">
                          <ProductContent obj={item} />
                        </Link>
                      </div>
                    ) : (
                      <div className="product-xs-2">
                        <Link to="" className="product-link">
                          <ProductXs2 obj={item} />
                        </Link>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          {xs === true ? (
            <Text26Light
              text="AN ODE TO WOMEN AND THEIR DARING"
              paddingTop="20px"
              borderTop="1px solid #e5e5e5"
            />
          ) : null}
          {xs === true ? <TabVideo obj={video2} /> : null}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
