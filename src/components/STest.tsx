import { useEffect, useState } from 'react';

export default function STest() {
  const [msg, setMsg] = useState('');
  const [ws, setWs] = useState<WebSocket | null>(null);
  console.log('rerendad');

  useEffect(() => {
    console.log('made a ws connection');
    const tempWs = new WebSocket('ws://127.0.0.1:8080/ws');
    tempWs?.addEventListener('message', (event) => {
      console.log('server said: ', event.data);
      setMsg(event.data);
    });
    setWs(tempWs);
  }, []);

  const handleClick = () => {
    ws?.send('hi there');
  };

  return (
    <>
      <p>backend msg is {msg}</p>
      ffs
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full"
        onClick={handleClick}>
        xd
      </button>
    </>
  );
}
