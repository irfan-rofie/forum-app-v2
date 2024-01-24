import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThreadsList from './ThreadsList';
import HomePageHeader from './HomePageHeader';
import NewThreadButton from './NewThreadButton';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

function HomePageContent() {
  const {
    threads = [], users = [], authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  const categories = threads.map((thread) => thread.category);

  const onNewThreadClick = () => {
    navigate('/new');
  };

  return (
    <>
      <HomePageHeader categories={categories} />
      <div className="home-page__content">
        <h2>Diskusi tersedia</h2>
        <ThreadsList threads={threadList} />
      </div>
      <NewThreadButton newThread={onNewThreadClick} />
    </>
  );
}

export default HomePageContent;
