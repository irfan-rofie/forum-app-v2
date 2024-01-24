import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';
import ThreadUpvoteButton from './ThreadUpvoteButton';
import ThreadDownvoteButton from './ThreadDownvoteButton';
import ThreadCreatedAt from './ThreadCreatedAt';

function ThreadItem({
  id, category, title, body, upVotesBy, downVotesBy, totalComments, createdAt, user, authUser,
}) {
  return (
    <div className="thread-item">
      <header className="thread-item__header">
        <span className="thread-item__category">
          #
          {category}
        </span>
        <h4 className="thread-item__title">
          <Link to={`/threads/${id}`}>{title}</Link>
        </h4>
      </header>
      <div className="thread-item__body">{parser(body)}</div>
      <footer className="thread-item__footer">
        <ThreadUpvoteButton upVotesBy={upVotesBy} authUser={authUser} />
        <ThreadDownvoteButton downVotesBy={downVotesBy} authUser={authUser} />
        <p className="thread-item__total-comments">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z" />
          </svg>
          {totalComments}
        </p>
        <ThreadCreatedAt createdAt={createdAt} />
        <p className="thread-item__owner">
          Dibuat oleh
          {' '}
          <strong>{user.name}</strong>
        </p>
      </footer>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
};

export { threadItemShape };

export default ThreadItem;
