import { useEffect } from 'react';
import './Lobby.scss';

export default function Lobby({ userName, roomId, setWs }) {
  const playerInfo = [
    // will be updated once the API is ready
    { id: 1, avatar: 'img1', playerName: 'John', status: 'wait' },
    { id: 2, avatar: 'img2', playerName: 'Peter', status: 'wait' },
    { id: 3, avatar: 'img3', playerName: 'Mark', status: 'Ready' },
    { id: 4, avatar: 'img4', playerName: 'Tom', status: 'wait' },
    { id: 5, avatar: 'img5', playerName: 'George', status: 'wait' },
    { id: 6, avatar: 'img6', playerName: 'David', status: 'Ready' }
  ];
  useEffect(() => {
    console.log(roomId);
    if (roomId === '') return;
    const tempWs = new WebSocket('ws://127.0.0.1:8080/ws');
    tempWs?.addEventListener('message', (event) => {
      // add handler
      console.log('server said: ', event.data, 't', typeof event.data);
    });
    tempWs.onopen = (ev) => {
      tempWs.send(
        JSON.stringify({
          type: 'join',
          body: {
            roomId,
            userName
          }
        })
      );
    };
    setWs(tempWs);
  }, [setWs, roomId, userName]);
  return (
    <div className="lobby-container">
      <div className="player-status-info-container">
        {playerInfo.map((player) => (
          <div className="player-status-info-cards">
            <div className="player-avatar">{player.avatar}</div>
            <div className="player-info">{player.playerName}</div>
            <div className="status-info">{player.status}</div>
          </div>
        ))}
      </div>
      <div className="ready-wait-btn-container">
        <button
          className="btn ready-wait-btn"
          disabled={playerInfo.filter((i) => i.status === 'wait').length !== 0} // will be updated once the API is ready
          role="button">
          Go
        </button>
      </div>
    </div>
  );
}
