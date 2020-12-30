import React from "react";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";

import "./header.scss";
import LogoImage from "../../assets/image/Logo.png";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-main">
          <div className="header-left">
            <div className="header-search">
              <form action="" className="search">
                <div className="search-content">
                  <div className="search-input">
                    <input
                      className="search-input-content"
                      type="text"
                      placeholder=" Tìm kiếm ?"
                    />
                  </div>
                  <div className="search-button">
                    <button className="search-button-content">
                      <div className="search-icon">
                        <Search />
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="header-center">
            <div className="header-logo">
              <div className="logo-content">
                <Link to="home" className="logo-link">
                  <img className="logo-image" src={LogoImage} alt="logo" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
