import React from 'react';
import PropTypes from 'prop-types';
import useInputInner from '../hooks/useInputInner';

function ThreadCommentInput({ giveComment }) {
  const [content, onContentInput] = useInputInner('');

  return (
    <div className="thread-comment__input">
      <h3>Beri komentar</h3>
      <form className="comment-input">
        <div className="comment-input__field" data-testid="content" contentEditable value={content} onInput={onContentInput} />
        <button type="button" onClick={() => giveComment({ content })}>Kirim</button>
      </form>
    </div>
  );
}

ThreadCommentInput.propTypes = {
  giveComment: PropTypes.func.isRequired,
};

export default ThreadCommentInput;
