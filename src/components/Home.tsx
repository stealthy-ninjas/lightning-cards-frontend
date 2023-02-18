export default function Home({ userName }: HomeProps) {
  return <div>hi {userName}</div>;
}

interface HomeProps {
  userName: string;
}
