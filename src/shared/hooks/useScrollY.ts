import { useEffect, useState } from 'react';

function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    // Registra un evento de desplazamiento y llama a handleScroll cuando ocurra
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollY;
}

export default useScrollY;
