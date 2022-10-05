import React from 'react';
import CategoriesItem from '../category-item/CategoriesItem';
import './categories.scss';

const Categories = ({ categories }) => {
  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoriesItem key={category.id} {...category} />
      ))}
    </div>
  );
};

export default Categories;
