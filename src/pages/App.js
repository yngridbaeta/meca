import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import HomePT from './index';
import HomeEN from './en/index';

function LanguageToggle() {
  const navigate = useNavigate();
  const location = useLocation();

  const isPortuguese = location.pathname === '/' || location.pathname === '/pt';

  const toggleLang = () => {
    if (isPortuguese) {
      navigate('/en');
    } else {
      navigate('/');
    }
  };

  return (
    <button onClick={toggleLang} style={{ margin: '20px', padding: '10px' }}>
      {isPortuguese ? 'Switch to English' : 'Mudar para Português'}
    </button>
  );
}

export default function App() {
  return (
    <Router>
      <LanguageToggle />
      <Routes>
        <Route path="/" element={<HomePT />} />
        <Route path="/en" element={<HomeEN />} />
      </Routes>
    </Router>
  );
}
