import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

function CategoriestList({ categories }) {
  return (
    <div className="categories-list">
      {
        categories.map((category) => (
          <CategoryItem key={category} category={category} />
        ))
      }
    </div>
  );
}

CategoriestList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CategoriestList;
