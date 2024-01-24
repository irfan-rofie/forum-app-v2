import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ThreadUpvoteButton from '../components/ThreadUpvoteButton';
import ThreadDownvoteButton from '../components/ThreadDownvoteButton';
import ThreadCreatedAt from '../components/ThreadCreatedAt';
import ThreadCommentList from '../components/ThreadCommentList';
import ThreadCommentInput from '../components/ThreadCommentInput';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';
import { asyncAddComment } from '../states/comments/action';

function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onGiveComment = ({ content }) => {
    dispatch(asyncAddComment({ id, content }));
    dispatch(asyncReceiveThreadDetail(id));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <section className="detail-page">
      <header className="thread-header">
        <p className="thread-header__category">
          #
          {threadDetail.category}
        </p>
      </header>
      <div className="thread-content">
        <h2>{threadDetail.title}</h2>
        <div className="thread-content__body">{threadDetail.body}</div>
      </div>
      <footer className="thread-footer">
        <ThreadUpvoteButton upVotesBy={threadDetail.upVotesBy} authUser={authUser.id} />
        <ThreadDownvoteButton downVotesBy={threadDetail.downVotesBy} authUser={authUser.id} />
        <div className="owner-info">
          <span>Dibuat Oleh</span>
          <img src={threadDetail.owner.avatar} alt="avatar" />
          <span>{threadDetail.owner.name}</span>
        </div>
        <ThreadCreatedAt createdAt={threadDetail.createdAt} />
      </footer>
      <div className="thread-comment">
        <ThreadCommentInput giveComment={onGiveComment} />
        <ThreadCommentList comments={threadDetail.comments} authUser={authUser.id} />
      </div>
    </section>
  );
}

export default DetailPage;
