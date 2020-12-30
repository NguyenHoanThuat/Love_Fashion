import React from "react";
import { Link } from "react-router-dom";

import Image_1 from "../../../../assets/image/img_1.png";
import Image_2 from "../../../../assets/image/Image_2.webp";
import "./gift.scss";

function Gift() {
  return (
    <div className="gift">
      <div className="container">
        <div className="gift-main">
          <ul className="gift-selection">
            <li className="gift-selection-content">
              <div className="gift-content-left">
                <div className="gift-img">
                  <Link to="" className="gift-img-link">
                    <div className="container-img">
                      <img
                        src={Image_1}
                        alt="gift-left"
                        className="gift-left"
                      />
                    </div>
                  </Link>
                </div>
                <div className="gift-list">
                  <div className="list-title">
                    <Link to="" className="list-title-link">
                      <span className="list-title-text">
                        fashion & accessories
                      </span>
                    </Link>
                  </div>
                  <ul className="list">
                    <li className="list-content">
                      <Link to="" className="list-content-link">
                        <span className="list-text">
                          Women’s Fashion and Accessories Gifts
                        </span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-content-link">
                        <span className="list-text">
                          Men's Fashion and Accessories Gifts
                        </span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-content-link">
                        <span className="list-text">Gifts for the Home</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-content-link">
                        <span className="list-text">Gifts for kids</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-content-link">
                        <span className="list-text">Gifts for Newborn</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="gift-selection-content">
              <div className="gift-content-right">
                <div className="title">
                  <Link to="" className="title-link">
                    <span className="title-text">fashion & beauty gifts</span>
                  </Link>
                </div>
                <div className="gift-img">
                  <Link to="" className="gift-img-link">
                    <div className="container-img">
                      <img
                        src={Image_2}
                        alt="gift-right"
                        className="gift-right"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Gift;
