import { useEffect } from 'react';

export default function Lobby({ userName, roomId, setWs }) {
  useEffect(() => {
    console.log(roomId);
    if (roomId === '') return;
    const tempWs = new WebSocket('ws://127.0.0.1:8080/ws');
    tempWs?.addEventListener('message', (event) => {
      console.log('server said: ', event.data);
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
    <div>
      <div></div>
    </div>
  );
}
