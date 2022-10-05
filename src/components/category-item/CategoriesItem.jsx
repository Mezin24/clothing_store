import React from 'react';
import './categories-item.scss';

const CategoriesItem = ({ id, imageUrl, title }) => {
  return (
    <div className='category-container' key={id}>
      <dir
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
          color: 'red',
        }}
      />
      <div className='category-body-container'>
        <h3 className='category-title'>{title}</h3>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoriesItem;
