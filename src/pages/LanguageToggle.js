// import React, { useState, useEffect } from 'react';

// export default function LanguageToggle() {
//   const [isEnglish, setIsEnglish] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     if (typeof window !== 'undefined') {
//       setIsEnglish(window.location.pathname.startsWith('/en'));
//     }
//   }, []);

//   if (!mounted) return null;

//   const toggleLanguage = () => {
//     if (typeof window !== 'undefined') {
//       window.location.href = isEnglish ? '/' : '/en';
//     }
//   };

//   const buttonStyle = {
//     top: '1rem',
//     right: '1rem',
//     background: 'rgba(219, 112, 147, 0.3)',
//     color: 'rgba(219, 112, 147, 0.9)',
//     border: '1.5px solid rgba(219, 112, 147, 0.6)',
//     padding: '0.5rem 1.2rem',
//     borderRadius: '20px',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     fontSize: '0.85rem',
//     zIndex: 1000,
//     marginLeft: '75%',
//     transition: 'background 0.3s ease, color 0.3s ease, border-color 0.3s ease',
//   };


//    return (
//     <button onClick={toggleLanguage} style={buttonStyle} aria-label="Toggle language">
//       {isEnglish ? 'Português' : 'English'}
//     </button>
//   );
// }import React from 'react';
import { useHistory, useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function LanguageToggle() {
  const { i18n } = useDocusaurusContext();
  const { pathname } = useLocation();
  const history = useHistory();

  const isEnglish = pathname.startsWith('/en');
  const targetLocale = isEnglish ? i18n.defaultLocale : 'en';

  const switchLanguage = () => {
    // Remove o prefixo '/en' se estiver em inglês
    const pathWithoutLocale = isEnglish
      ? pathname.replace(/^\/en/, '')
      : pathname;

    // Garante uma única barra no começo e remove barra duplicada
    const cleanedPath = `/${targetLocale === i18n.defaultLocale ? '' : targetLocale}${pathWithoutLocale}`
      .replace(/\/{2,}/g, '/'); // remove barras duplicadas

    history.push(cleanedPath);
  };

  return (
    <button
      onClick={switchLanguage}
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        background: 'rgba(219, 112, 147, 0.3)',
        color: 'rgba(219, 112, 147, 0.9)',
        border: '1.5px solid rgba(219, 112, 147, 0.6)',
        padding: '0.5rem 1.2rem',
        borderRadius: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '0.85rem',
        zIndex: 1000,
        transition: 'background 0.3s ease, color 0.3s ease, border-color 0.3s ease',
      }}
    >
      {isEnglish ? 'Português' : 'English'}
    </button>
  );
}
