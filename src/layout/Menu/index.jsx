import React from "react";
import { Link } from "react-router-dom";

import "./menu.scss";
import Gift from "./components/Gift/index.jsx";
import WomanFashion from "./components/WomanFashion/index.jsx";
import ManFashion from "./components/ManFashion/index.jsx";
import Fragrance from "./components/Fragrance/index.jsx";

function Menu() {
  return (
    <div>
      <div className="menu">
        <div className="container">
          <div className="menu-main">
            <ul className="menu-content">
              <li className="selection">
                <div className="selection-content">
                  <Link to="" className="selection-link">
                    <span className="selection-text">quà tặng & dịch vụ</span>
                  </Link>
                  <Gift />
                </div>
              </li>
              <li className="selection">
                <div className="selection-content">
                  <Link to="woman-fashion" className="selection-link">
                    <span className="selection-text">
                      thời trang của phụ nữ
                    </span>
                  </Link>
                  <WomanFashion />
                </div>
              </li>
              <li className="selection">
                <div className="selection-content">
                  <Link to="" className="selection-link">
                    <span className="selection-text">thời trang nam</span>
                  </Link>
                  <ManFashion />
                </div>
              </li>
              <li className="selection">
                <div className="selection-content">
                  <Link to="" className="selection-link">
                    <span className="selection-text">hương thơm</span>
                  </Link>
                  <Fragrance />
                </div>
              </li>
              <li className="selection">
                <div className="selection-content">
                  <Link to="" className="selection-link">
                    <span className="selection-text">trang điểm</span>
                  </Link>
                </div>
              </li>
              <li className="selection">
                <div className="selection-content">
                  <Link to="" className="selection-link">
                    <span className="selection-text">chăm sóc da</span>
                  </Link>
                </div>
              </li>
              <li className="selection">
                <div className="selection-content">
                  <Link to="" className="selection-link">
                    <span className="selection-text">trẻ em & bé</span>
                  </Link>
                </div>
              </li>
              <li className="selection">
                <div className="selection-content">
                  <Link to="" className="selection-link">
                    <span className="selection-text">maison</span>
                  </Link>
                </div>
              </li>
              <li className="selection">
                <div className="selection-content">
                  <Link to="" className="selection-link">
                    <span className="selection-text">tin tức</span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
