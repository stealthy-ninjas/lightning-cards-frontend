import { useState } from 'react';

export default function Sample() {
  const [user, setUser] = useState(null);
  const getUser = () =>
    fetch('http://localhost:8080/users/random')
      .then((response) => response.json())
      .then((userName) => setUser(userName));

  return (
    <>
      <div className="text-3xl font-bold text-blue-500 underline text-center">
        <h1>This is a sample page</h1>
        <p>check the references of this file to understand the structure</p>
        {user ? <span>{user}</span> : <button onClick={getUser}>get a user</button>}
      </div>
    </>
  );
}
