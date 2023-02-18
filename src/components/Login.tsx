import { useNavigate } from 'react-router-dom';

export default function Login({ setUserName }: LoginProps) {
  const navigate = useNavigate();

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    setUserName(e.target.name.value);
    navigate('/home');
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
