import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { baseURL } from '../../Constants';
import './Home.scss';
import { UserInfoContext } from '../../App';

export default function Home() {
  const navigate = useNavigate();
  const joinRef = React.useRef<HTMLInputElement>(null);
  const userInfoContext = useContext(UserInfoContext);
  const userName = userInfoContext.userInfo.userName;
  const handleCreate = () => {
    console.log('create');
    fetch(baseURL + '/create', {
      method: 'POST',
      body: JSON.stringify(userName)
    })
      .then(async (res) => await res.json())
      .then((d) => {
        userInfoContext.setUserInfo((prevState) => {
          return {
            ...prevState,
            userInfo: { ...prevState.userInfo, roomId: d.roomId || '' }
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
    navigate('/lobby');
  };

  const handleJoin = () => {
    if (joinRef.current === null) return;
    console.log('join ', joinRef.current.value);
    userInfoContext.setUserInfo((prevState) => {
      return {
        ...prevState,
        userInfo: { ...prevState.userInfo, roomId: joinRef.current?.value || '' }
      };
    });

    navigate('/lobby');
  };

  if (userName === '') {
    return <Navigate to="/" />;
  }

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
