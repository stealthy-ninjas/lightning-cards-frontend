import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import STest from './components/STest';

export default function App() {
  const [userName, setUserName] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setUserName={setUserName} />} />
        <Route path="/home" element={<Home userName={userName} />} />
        <Route path="/stest" element={<STest />} />
      </Routes>
    </BrowserRouter>
  );
}
