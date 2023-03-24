import React from 'react';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../Constants';
import './Home.scss';

export default function Home({ userName, setRoomId }: HomeProps) {
  const navigate = useNavigate();
  const joinRef = React.useRef<HTMLInputElement>(null);

  const handleCreate = () => {
    console.log('create');
    fetch(baseURL + '/create', { method: 'POST', body: JSON.stringify({ userName }) })
      .then(async (res) => await res.json())
      .then((d) => {
        setRoomId(d.roomId);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate('/lobby');
  };

  const handleJoin = () => {
    if (joinRef.current === null) return;
    console.log('join ', joinRef.current.value);
    setRoomId(joinRef.current?.value);
    navigate('/lobby');
  };

  return (
    <>
      <div className="home-page">
        <div className="logo">
          <img src="./../../../public/Images/logo.png" alt="" />
          <hr />
        </div>
        <div className="join-game">
          <button onClick={handleJoin} className="btn join-button" role="button">
            JOIN
          </button>
          <input type="text" ref={joinRef} />
        </div>
        <div className="create-game">
          <button onClick={handleCreate} className="btn create-button" role="button">
            CREATE
          </button>
        </div>
      </div>
    </>
  );
}

interface HomeProps {
  userName: string;
  setRoomId: (v: string) => void;
}
