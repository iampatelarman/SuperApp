import React from "react";
import "./category.css";
import dangerImg from "../../images/danger-sign.png";
import john from "../../images/john-wick.png";

const Category = () => {
  return (
    <div className="container">
      <div className="category">
        {/* category details */}
        <div className="category-details">
          <h1>Super app</h1>
          <p>choose your entertainment category</p>
          <div className="category-list">
            <div className="single-category">
              Romance <button className="close-btn">X</button>
            </div>
            <div className="single-category">
              Drama <button className="close-btn">X</button>
            </div>
          </div>
          <div className="category-error">
            <img src={dangerImg} alt="danger" /> minimum 3 category required
          </div>
        </div>
        {/* category cards */}

        <div className="category-cards">
          <div className="cards-container">
            <div className="single-category-card">
              <h2>Action</h2>
              <img src={john} alt="john wick" />
            </div>
            <div className="single-category-card">
              <h2>Action</h2>
              <img src={john} alt="john wick" />
            </div>
            <div className="single-category-card">
              <h2>Action</h2>
              <img src={john} alt="john wick" />
            </div>
            <div className="single-category-card">
              <h2>Action</h2>
              <img src={john} alt="john wick" />
            </div>
          </div>
          <button className="next-btn">Next Page</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
