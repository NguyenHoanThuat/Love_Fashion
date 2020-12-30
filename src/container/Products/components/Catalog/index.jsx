import React from "react";
import { ViewModule, ViewComfy } from "@material-ui/icons/";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

// Catalog.propTypes = {

// };

import "./catalog.scss";
import ProductContent from "../ProductContent/index.jsx";

import Item1 from "../../../../assets/image/item-1.webp";
import Item2 from "../../../../assets/image/item-2.webp";
import Item3 from "../../../../assets/image/item-3.webp";
import Item4 from "../../../../assets/image/item-4.webp";
import Item5 from "../../../../assets/image/item-5.webp";
import Item6 from "../../../../assets/image/item-6.webp";

const listItem = [
  {
    class: "product-content",
    image: Item1,
    index: 1,
  },
  {
    class: "product-new",
    image: Item2,
    index: 2,
  },
  {
    class: "product-content",
    image: Item3,
    index: 3,
  },
  {
    class: "product-content",
    image: Item4,
    index: 4,
  },
  {
    class: "product-new",
    image: Item5,
    index: 5,
  },
  {
    class: "product-content",
    image: Item6,
    index: 6,
  },
];

function Catalog() {
  return (
    <div className="catalog">
      <div className="catalog-main">
        <div className="toolbar">
          <div className="toolbar-main">
            <div className="button-view-item">
              <button className="view-item view-big-item">
                <ViewModule fontSize="large" color="disabled" />
              </button>
            </div>
            <div className="button-view-item">
              <button className="view-item view-small-item">
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
                return (
                  <li key={item.index} className="item-content">
                    <div className="product-xs-4">
                      <Link to="" className="product-link">
                        <ProductContent obj={item} />
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
