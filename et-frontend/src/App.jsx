import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar.jsx';
import Footer from './footer.jsx';
import Banner from './banner.jsx';
import Srilanka from './srilanka.jsx';
import Hotel from './hotel.jsx';
import Admin from './hoteltable.jsx';
import Add from './addhotel.jsx';
import useLocalStorage from "use-local-storage";
import './css/index.css'

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark] = useLocalStorage("isDark", preference);
  const [verificationCode, setVerificationCode] = React.useState('');

  useEffect(() => {
    const storedVerificationCode = localStorage.getItem('verificationCode');
    setVerificationCode(storedVerificationCode);
  }, []);

  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--background-img-main', isDark ? "url('http://localhost:5173/src/assets/background_dark.png')" : "url('http://localhost:5173/src/assets/back_white.png')");
  }, [isDark]);

  return (
    <div data-theme={isDark ? 'dark' : 'light'}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/srilanka" element={<Srilanka />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/admin/:verificationCode" element={<Admin />} />
          <Route path="/addhotel" element={<Add />} />
          <Route path="/update/:hotel_id" element={<Add />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
