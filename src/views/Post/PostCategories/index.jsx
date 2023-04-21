import React from "react";
import { CategoryCard } from "../../../components/CategoryCard";
import "./index.css"
import { categories } from "../../../assets/Categories/categories";
export const PostCategories = ({ onCategoryClick }) => {
 

  return (
    <div className="post-categories">
      {categories.map((category) => (
        <CategoryCard
          key={category.name}
          category={category}
          onClick={onCategoryClick}
        />
      ))}
    </div>
  );
};
