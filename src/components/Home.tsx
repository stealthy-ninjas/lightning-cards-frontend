export default function Home({ userName }: HomeProps) {
  return (
    <>
      <div>logo here</div>
      <div>Let&apos;s get started, {userName}</div>
      <div className="my-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-1/3">
          Create
        </button>
      </div>
      <div className="my-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-1/3">
          Join
        </button>
      </div>
    </>
  );
}

interface HomeProps {
  userName: string;
}
