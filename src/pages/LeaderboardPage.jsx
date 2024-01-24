import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LeaderboardItem from '../components/LeaderboardItem';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';

function LeaderboardPage() {
  const { leaderboards = [], authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  return (
    <div className="board-page">
      <h2>Klasmen Pengguna Aktif</h2>
      <div className="leaderboards-list">
        <header>
          <p className="leaderboards-list__user-label">Pengguna</p>
          <p className="leaderboards-list__score-label">Skor</p>
        </header>
        {
          leaderboards.map((leaderboard) => (
            <LeaderboardItem key={leaderboard.user} {...leaderboard} authUser={authUser.id} />
          ))
        }
      </div>
    </div>
  );
}

export default LeaderboardPage;
