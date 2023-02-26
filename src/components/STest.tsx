import { useEffect, useState } from 'react';

export default function STest() {
  const [msg, setMsg] = useState('');
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    setWs(new WebSocket('ws://127.0.0.1:8080/ws'));
  }, []);

  const handleClick = () => {
    ws?.addEventListener('message', (event) => {
      console.log('server said: ', event.data);
      setMsg(event.data);
    });
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
