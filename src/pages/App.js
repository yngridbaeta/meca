import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import HomePT from './index';
import HomeEN from './en/index';
import BrowserOnly from '@docusaurus/BrowserOnly';

function LanguageToggle() {
  const navigate = useNavigate();
  const location = useLocation();

  const isPortuguese = location.pathname === '/' || location.pathname === '/en';

  const toggleLang = () => {
    if (isPortuguese) {
      navigate('/');
    } else {
      navigate('/en');
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
    <BrowserOnly>
      <Router>
        <LanguageToggle />
        <Routes>
          <Route path="/" element={<HomePT />} />
          <Route path="/en" element={<HomeEN />} />
        </Routes>
      </Router>
    </BrowserOnly>

  );
}
