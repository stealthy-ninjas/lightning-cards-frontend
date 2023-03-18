import { useEffect } from 'react';

export default function Lobby({ roomId, setWs }) {
  useEffect(() => {
    const tempWs = new WebSocket('ws://127.0.0.1:8080/ws');
    tempWs?.addEventListener('message', (event) => {
      console.log('server said: ', event.data);
    });
    tempWs.onopen = (ev) => {
      tempWs.send('henlo');
    };
    setWs(tempWs);
  }, [setWs]);
  return (
    <div>
      <div></div>
    </div>
  );
}
