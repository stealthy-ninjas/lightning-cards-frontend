import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import STest from './components/STest';
import Lobby from './components/Lobby/Lobby';
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const [userName, setUserName] = useState('');
  const [roomId, setRoomId] = useState('');
  const [ws, setWs] = useState(null);
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setUserName={setUserName} />} />
        <Route path="/home" element={<Home userName={userName} setRoomId={setRoomId} />} />
        <Route path="/stest" element={<STest />} />
        <Route path="/lobby" element={<Lobby roomId={roomId} setWs={setWs} />} />
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}
