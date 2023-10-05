import React, { useState } from "react";
import "./category.css";
import dangerImg from "../../images/danger-sign.png";
import { defaultCateory } from "../../defaultCategory";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import { setLocalStorage } from "../../localStorage";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleClick = (value, setSelected) => {
    if (selectedCategory.includes(value)) {
      const newSelections = selectedCategory.filter((item) => item !== value);
      setSelectedCategory(newSelections);
      setSelected(false);
    } else {
      setSelectedCategory([...selectedCategory, value]);
    }
  };

  const handleNext = () => {
    if (selectedCategory.length < 3) {
      setShowError(true);
    } else {
      const newDefaultCateory = defaultCateory.map((item) => {
        if (selectedCategory.includes(item.value)) {
          return { ...item, isSelected: true };
        }
        return item;
      });
      setLocalStorage("Categories", newDefaultCateory);
      navigate("/homepage");
    }
  };
  return (
    <div className="container">
      <div className="category">
        {/* category details */}
        <div className="category-details">
          <h1>Super app</h1>
          <p>choose your entertainment category</p>
          <div className="category-list">
            {selectedCategory?.map((item, index) => {
              return (
                <div className="single-category" key={index}>
                  {item}{" "}
                  <button
                    className="close-btn"
                    onClick={() => handleClick(item)}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>

          {showError && selectedCategory.length < 3 && (
            <div className="category-error">
              <img src={dangerImg} alt="danger" /> minimum 3 category required
            </div>
          )}
        </div>
        {/* category cards */}

        <div className="category-cards">
          <div className="cards-container">
            {defaultCateory.map((item, index) => {
              return (
                <CategoryCard key={index} {...item} handleClick={handleClick} />
              );
            })}
          </div>
          <button
            className={
              selectedCategory.length < 3 ? "next-btn disabled" : "next-btn"
            }
            onClick={handleNext}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
