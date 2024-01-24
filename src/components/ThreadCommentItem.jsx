import React from 'react';
import PropTypes from 'prop-types';
import ThreadUpvoteButton from './ThreadUpvoteButton';
import ThreadDownvoteButton from './ThreadDownvoteButton';
import api from '../utils/api';

function ThreadCommentItem({
  content, createdAt, owner, upVotesBy, downVotesBy, authUser,
}) {
  return (
    <div className="comment-item">
      <header className="comment-item__header">
        <div className="comment-item__owner-info">
          <img src={owner.avatar} alt={owner.name} />
          <p>{owner.name}</p>
        </div>
        <p className="posted-at">{api.postedAt(createdAt)}</p>
      </header>
      <p>{content}</p>
      <footer>
        <ThreadUpvoteButton upVotesBy={upVotesBy} authUser={authUser} />
        <ThreadDownvoteButton downVotesBy={downVotesBy} authUser={authUser} />
      </footer>
    </div>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const commentItemShape = {
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

ThreadCommentItem.propTypes = {
  ...commentItemShape,
  authUser: PropTypes.string.isRequired,
};

export { commentItemShape };

export default ThreadCommentItem;
