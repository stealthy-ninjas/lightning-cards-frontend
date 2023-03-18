import { useNavigate } from 'react-router-dom';
import {useMutation} from 'react-query';
import {logUserIn} from "./../utils/login-service.js"

export default function Login({ setUserName }: LoginProps) {
  const navigate = useNavigate();
  const userLoginMutation = useMutation({
    mutationFn : () => {
      return logUserIn().then((res) => {
        console.log(res);
        res.statusText === 'OK' && navigate('/home');
      })
    }
  })

  const handleSubmit = async (e)=> {
    e.preventDefault();
    setUserName(e.target.name.value);
    await userLoginMutation.mutateAsync()
    
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

interface LoginProps {
  setUserName: (userName: string) => void;
}
