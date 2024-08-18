import { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';

const useSmoothScrollbar = () => {
  const scrollbarRef = useRef(null);

  useEffect(() => {
    const options = {
      damping: 0.1, // Adjust this value to control the smoothness
    };

    const initScrollbar = () => {
      if (window.innerWidth >= 768) {
        if (scrollbarRef.current) {
          Scrollbar.init(scrollbarRef.current, options);
        }
      } else {
        if (scrollbarRef.current) {
          scrollbarRef.current.style.overflow = 'auto';
        }
      }
    };

    const destroyScrollbar = () => {
      if (scrollbarRef.current) {
        Scrollbar.destroy(scrollbarRef.current);
        scrollbarRef.current.style.overflow = 'auto';
      }
    };

    initScrollbar();

    const handleResize = () => {
      destroyScrollbar();
      initScrollbar();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      destroyScrollbar();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return scrollbarRef;
};

export default useSmoothScrollbar;
