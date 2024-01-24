import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NewThreadInput from '../components/NewThreadInput';
import { asyncAddThread } from '../states/threads/action';

function NewThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onNewThread = ({ title, body, category = '' }) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  return (
    <div className="new-thread-page">
      <h2>Buat Diskusi Baru</h2>
      <NewThreadInput newThread={onNewThread} />
    </div>
  );
}

export default NewThreadPage;
