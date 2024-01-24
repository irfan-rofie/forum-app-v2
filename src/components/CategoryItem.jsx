import React from 'react';
import PropTypes from 'prop-types';

function CategoryItem({ category }) {
  return (
    <button type="button" className="category-item ">
      <p>
        #
        {category}
      </p>
    </button>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryItem;
