import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Styled from "styled-components";

import "./fashionSelection.scss";
import TextTitle from "../TextTitle/index.jsx";

FashionSelection.propTypes = {
  selectionList: PropTypes.array,
  margin: PropTypes.string,
};

FashionSelection.defaultProps = {
  selectionList: [],
  margin: "",
};

const StyledDiv = Styled.div`
    margin: ${(props) => props.margin}
`;

function FashionSelection(props) {
  const { selectionList, margin } = props;

  return (
    <StyledDiv margin={margin} className="fashion-selection">
      <ul className="fashion-selection-main">
        {selectionList.map((selection, index) => {
          return (
            <li key={index} className="fashion-selection-content">
              <Link to="" className="fashion-selection-link">
                <div className="fashion-selection-img">
                  <img src={selection.imageSelection} alt="selection" />
                </div>
                <TextTitle text={selection.titleSelection} textAlign="start" />
              </Link>
            </li>
          );
        })}
      </ul>
    </StyledDiv>
  );
}

export default FashionSelection;
