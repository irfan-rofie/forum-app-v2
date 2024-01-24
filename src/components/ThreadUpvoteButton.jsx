import React from 'react';
import PropTypes from 'prop-types';

function ThreadUpvoteButton({ upVotesBy, authUser }) {
  return (
    <button type="button" className="thread-upvote__button">
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" d={upVotesBy.includes(authUser) ? 'M24 24H0V0h24v24z' : 'M0 0h24v24H0V0z'} opacity=".87" />
        <path d={upVotesBy.includes(authUser) ? 'M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66a4.8 4.8 0 00-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84A2.34 2.34 0 009.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z' : 'M21 8h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2zm0 4l-3 7H9V9l4.34-4.34L12.23 10H21v2zM1 9h4v12H1z'} />
      </svg>
      <span className="thread-upvote__label">{upVotesBy.length}</span>
    </button>
  );
}

ThreadUpvoteButton.propTypes = {
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
};

export default ThreadUpvoteButton;
