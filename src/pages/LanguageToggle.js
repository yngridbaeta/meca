import React from 'react';

export default function LanguageToggle() {
  const isEnglish = window.location.pathname.startsWith('/en');

  const toggleLanguage = () => {
    window.location.href = isEnglish ? '/' : '/en';
  };

  const buttonStyle = {
    marginLeft: '75%',
    top: '1rem',
    right: '1rem',
    background: 'rgba(219, 112, 147, 0.15)', // rosa translúcido com 15% de opacidade
  color: 'rgba(169, 161, 164, 0.8)',       // texto com 80% de opacidade da cor rosa
  border: '1.5px solid rgba(219, 112, 147, 0.4)', // borda com 40% de opacidade
    padding: '0.5rem 1.2rem',
    borderRadius: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '0.85rem',
    zIndex: 1000,
    transition: 'background 0.3s ease, color 0.3s ease, border-color 0.3s ease',
    boxShadow: 'none',                    // removi a sombra para um visual mais leve
  };

  return (
    <button
      onClick={toggleLanguage}
      style={buttonStyle}
    >
      {isEnglish ? 'Português' : 'English'}
    </button>
  );
}
