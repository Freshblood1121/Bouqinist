import React, { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import { useParams } from "react-router-dom";
import { API_URL } from "../../../Utils/Constants";

const CategoryCardBox = () => {
  let { categoryId } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!categoryId) {
      console.log("!categoryId сработал");
      fetch(`${API_URL.BOOKS}`)
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          setItems(data);
          console.log(data);
        });
    } else {
      console.log("!categoryId не сработал");
      fetch(`${API_URL.CATEGORIES}`)
        .then((data) => data.json())
        .then((data) => setCategories(data));
    }
  }, []);

  return (
    <div className="category__cards">
      {items.map((item) => {
        <CategoryCard item={item} key={item.id} />;
      })}
    </div>
  );
};

export default CategoryCardBox;
