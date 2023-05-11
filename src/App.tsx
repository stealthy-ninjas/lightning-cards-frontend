import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import STest from './components/STest';
import Lobby from './components/Lobby/Lobby';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import {
  UserInfoContextType,
  userInfoContextInitValues
} from './contexts/ContextInitValuesProvider';

export const UserInfoContext = React.createContext(userInfoContextInitValues);

export default function App() {
  const [ws, setWs] = useState(null);
  const queryClient = new QueryClient();
  const [userInfoContext, setUserInfo] = useState<UserInfoContextType>(userInfoContextInitValues);

  return (
    <UserInfoContext.Provider value={{ ...userInfoContext, setUserInfo }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/stest" element={<STest />} />
            <Route path="/lobby" element={<Lobby setWs={setWs} />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </UserInfoContext.Provider>
  );
}
