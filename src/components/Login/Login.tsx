import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { logUserIn } from './../utils/login-service';
import React, { useContext } from 'react';
import { UserInfoContext } from '../../App';
import { userInfoContextInitValues } from '../../contexts/ContextInitValuesProvider.js';

export default function Login() {
  const navigate = useNavigate();
  const userInfoContext = useContext<typeof userInfoContextInitValues>(UserInfoContext);

  const userLoginMutation = useMutation({
    mutationFn: async (userName) => {
      await logUserIn(userName).then((res: any) => {
        res.statusText === 'OK' && navigate('/home');
      });
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    userInfoContext.setUserInfo((prevState) => {
      return { ...prevState, userInfo: { ...prevState.userInfo, userName: e.target.name.value } };
    });

    await userLoginMutation.mutateAsync(e.target.name.value);
  };
  return (
    <div>
      <p>What&apos;s your name ?</p>
      <form onSubmit={handleSubmit}>
        <input name="name" className="border border-black"></input>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full">
          -&gt;
        </button>
      </form>
    </div>
  );
}
