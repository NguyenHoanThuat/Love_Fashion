import React from "react";
import { Link } from "react-router-dom";

import Image_5 from "../../../../assets/image/Image_5.webp";
import Image_6 from "../../../../assets/image/Image_6.webp";
import Image_7 from "../../../../assets/image/Image_7.webp";
import "./manFashion.scss";

function ManFashion() {
  return (
    <div className="man-fashion">
      <div className="container">
        <div className="man-fashion-main">
          <ul className="man-fashion-selection">
            <li className="man-fashion-selection-content">
              <div className="man-fashion-content">
                <div className="man-fashion-section">
                  <div className="title">
                    <span className="title-text">gifts</span>
                  </div>
                  <div className="img">
                    <Link to="" className="img-link">
                      <div className="container-img">
                        <img
                          src={Image_5}
                          alt="woman-fashion"
                          className="man-fashion-img"
                        />
                      </div>
                    </Link>
                  </div>
                  <ul className="list">
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">The selection for him</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="man-fashion-section">
                  <div className="title">
                    <span className="title-text">what's new</span>
                  </div>
                  <div className="img">
                    <Link to="" className="img-link">
                      <div className="container-img">
                        <img
                          src={Image_6}
                          alt="woman-fashion"
                          className="man-fashion-img"
                        />
                      </div>
                    </Link>
                  </div>
                  <ul className="list">
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Ski Capsule</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">
                          Spring 2021 Collection
                        </span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Dior Oblique Galaxy</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">B27 Sneakers</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Modern Tailoring</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Luxury Essentials</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Dior Essentials</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="man-fashion-selection-content">
              <div className="man-fashion-content">
                <div className="man-fashion-section">
                  <div className="title">
                    <span className="title-text">ready-to-wear</span>
                  </div>
                  <ul className="list">
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Suits & Tuxedos</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Suit Jackets</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">
                          Jackets, Coats & Leather Jackets
                        </span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">
                          Sweaters & Sweatshirts
                        </span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Shirts</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">T-Shirts & Polos</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Denim</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Trousers & Shorts</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Ski clothing</span>
                      </Link>
                    </li>
                    <li className="list-space">
                      <div className="space-between"></div>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Luxury Essentials</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">
                          Christian Dior Atelier
                        </span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Dior Essentials</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Dior Tailoring</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="man-fashion-selection-content">
              <div className="man-fashion-content">
                <div className="man-fashion-section">
                  <div className="title">
                    <span className="title-text">leather goods</span>
                  </div>
                  <ul className="list">
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Shoulder bags</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Backpacks</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Tote Bags</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">
                          Briefcases & Messenger bags
                        </span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Pouches</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Travel Bags </span>
                      </Link>
                    </li>
                    <li className="list-space">
                      <div className="space-between"></div>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Dior Essentials</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Saddle</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Roller</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="man-fashion-selection-content">
              <div className="man-fashion-content">
                <div className="man-fashion-section">
                  <div className="title">
                    <span className="title-text">shoes</span>
                  </div>
                  <ul className="list">
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Sneakers</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Ankle Boots</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">
                          Derby Shoes & Oxford Loafers
                        </span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Sandals</span>
                      </Link>
                    </li>
                    <li className="list-space">
                      <div className="space-between"></div>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">B27 Sneakers</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Dior Essentials</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">B23 Sneakers</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">B22 Sneakers</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">
                          Make Your Sneakers Unique
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="man-fashion-selection-content">
              <div className="man-fashion-content">
                <div className="man-fashion-section">
                  <div className="title">
                    <span className="title-text">accessories</span>
                  </div>
                  <ul className="list">
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Sunglasses</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">
                          Wallets & Card Holders
                        </span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">
                          Phone cases & High-Tech Accessories
                        </span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Key rings</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Sneaker charms</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Costume Jewelry</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">
                          Cufflinks & Other Accessories
                        </span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Belts & Gloves</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Hats & Baseball Caps</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">
                          Scarves, Bandanas & Blankets
                        </span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">
                          Ties, Bow ties & Pocket squares
                        </span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Socks</span>
                      </Link>
                    </li>
                    <li className="list-space">
                      <div className="space-between"></div>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Dior Essentials</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Make Your Own Belt</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="man-fashion-selection-content">
              <div className="man-fashion-content">
                <div className="man-fashion-section">
                  <div className="title">
                    <span className="title-text">shows</span>
                  </div>
                  <ul className="list">
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Fall 2021</span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">
                          Summer 2021 Men's Collection
                        </span>
                      </Link>
                    </li>
                    <li className="list-content">
                      <Link to="" className="list-link">
                        <span className="list-text">Winter 2020-2021</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="man-fashion-section">
                  <div className="title">
                    <span className="title-text">made to measure</span>
                  </div>
                  <div className="img">
                    <Link to="" className="img-link">
                      <div className="container-img">
                        <img
                          src={Image_7}
                          alt="woman-fashion"
                          className="man-fashion-img"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ManFashion;
