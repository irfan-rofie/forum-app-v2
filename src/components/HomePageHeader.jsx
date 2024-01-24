import React from 'react';
import PropTypes from 'prop-types';
import CategoriestList from './CategoriestList';

function HomePageHeader({ categories }) {
  return (
    <header>
      <p>Kategori popular</p>
      <CategoriestList categories={categories} />
    </header>
  );
}

HomePageHeader.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HomePageHeader;
