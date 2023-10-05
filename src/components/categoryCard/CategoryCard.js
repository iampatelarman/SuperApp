import React, { useState } from "react";

const CategoryCard = ({ color, label, imgURL, handleClick, value }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={
        selected ? "single-category-card card-selected" : "single-category-card"
      }
      style={{ backgroundColor: color }}
      onClick={() => {
        setSelected(!selected);
        handleClick(value, setSelected);
      }}
    >
      <h2>{label}</h2>
      <img src={imgURL} alt="john wick" />
    </div>
  );
};

export default CategoryCard;
