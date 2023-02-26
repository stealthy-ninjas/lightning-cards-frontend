import { type SetStateAction, useEffect, useState } from 'react';

export default function STest() {
  const [msg, setMsg] = useState('');
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    setWs(new WebSocket('ws://127.0.0.1:8080/ws'));
  }, []);

  return (
    <>
      <p>backend msg is {msg}</p>
    </>
  );
}
