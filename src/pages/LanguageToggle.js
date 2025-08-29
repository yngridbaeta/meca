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
import React, { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function LanguageToggle() {
  const { pathname } = useLocation();

  const [isMounted, setIsMounted] = useState(false);

  // Só executa no client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // evita erros durante build SSR

  const isEnglish = pathname.startsWith('/en');
  console.log(isEnglish);
  const targetLocale = isEnglish ? 'pt' : 'en';

  const switchLanguage = () => {
    console.log(targetLocale)
    // const pathWithoutLocale = isEnglish
    //   ? pathname.replace(/^\/en/, '')
    //   : pathname;

    // const cleanedPath = `/${targetLocale === '' ? '' : targetLocale}${pathWithoutLocale}`
    //   .replace(/\/{2,}/g, '/');
    const cleanedPath = targetLocale == 'pt' ? '/' : '/en'
    console.log(cleanedPath)

    window.location.href = cleanedPath; // ✅ Usa redirecionamento client-side
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
