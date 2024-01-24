import React from 'react';
import PropTypes from 'prop-types';

function ThreadDownvoteButton({ downVotesBy, authUser }) {
  return (
    <button type="button" className="thread-downvote__button">
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" d={downVotesBy.includes(authUser) ? 'M24 24H0V0h24v24z' : 'M0 0h24v24H0V0z'} opacity=".87" />
        <path d={downVotesBy.includes(authUser) ? 'M22 4h-2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h2V4zM2.17 11.12c-.11.25-.17.52-.17.8V13c0 1.1.9 2 2 2h5.5l-.92 4.65c-.05.22-.02.46.08.66.23.45.52.86.88 1.22L10 22l6.41-6.41c.38-.38.59-.89.59-1.42V6.34C17 5.05 15.95 4 14.66 4h-8.1c-.71 0-1.36.37-1.72.97l-2.67 6.15z' : 'M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5c0-1.1-.9-2-2-2zm0 12l-4.34 4.34L11.77 14H3v-2l3-7h9v10zm4-12h4v12h-4z'} />
      </svg>
      <span className="thread-downvote__label">{downVotesBy.length}</span>
    </button>
  );
}

ThreadDownvoteButton.propTypes = {
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
};

export default ThreadDownvoteButton;
