import React from 'react';
import PropTypes from 'prop-types';
import ThreadCommentItem, { commentItemShape } from './ThreadCommentItem';

function ThreadCommentList({ comments, authUser }) {
  return (
    <div className="thread-comment__list">
      <h3>
        Komentar (
        {comments.length}
        )
      </h3>
      <div className="comments-list">
        {
          comments.map((comment) => (
            <ThreadCommentItem key={comment.id} {...comment} authUser={authUser} />
          ))
        }
      </div>
    </div>
  );
}

ThreadCommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentItemShape)).isRequired,
  authUser: PropTypes.string.isRequired,
};

export default ThreadCommentList;
