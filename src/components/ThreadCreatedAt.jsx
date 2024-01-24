import React from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';

function ThreadCreatedAt({ createdAt }) {
  return (
    <p>{api.postedAt(createdAt)}</p>
  );
}

ThreadCreatedAt.propTypes = {
  createdAt: PropTypes.string.isRequired,
};

export default ThreadCreatedAt;
