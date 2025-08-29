import React, { useState, useEffect } from 'react';

export default function LanguageToggle() {
  const [isEnglish, setIsEnglish] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      setIsEnglish(window.location.pathname.startsWith('/en'));
    }
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleLanguage = () => {
    if (typeof window !== 'undefined') {
      window.location.href = isEnglish ? '/' : '/en';
    }
  };

  const buttonStyle = {
    top: '1rem',
    right: '1rem',
    background: 'rgba(219, 112, 147, 0.15)',
    color: 'rgba(169, 161, 164, 0.8)',
    border: '1.5px solid rgba(219, 112, 147, 0.4)',
    padding: '0.5rem 1.2rem',
    borderRadius: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '0.85rem',
    zIndex: 1000,
    transition: 'background 0.3s ease, color 0.3s ease, border-color 0.3s ease',
    boxShadow: 'none',
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
