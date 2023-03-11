import "./Home.scss"
export default function Home({ userName }: HomeProps) {
  return (
    <>
      <div className="home-page">
        <div className="logo">
          <img src="./../../../public/Images/logo.png" alt=""  />
          <hr/>
        </div>
        <div className="join-game">
          <button className="btn join-button" role="button">JOIN</button>
        </div>
        <div className="create-game">
          <button className="btn create-button" role='button'>CREATE</button>
        </div>
      </div>
    </>
  );
}

interface HomeProps {
  userName: string;
}
