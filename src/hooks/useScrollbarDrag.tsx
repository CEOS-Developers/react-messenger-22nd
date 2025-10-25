import { useState, useEffect } from 'react';

export const useScrollbarDrag = (ref: React.RefObject<HTMLElement | null>) => {
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsDragging(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsDragging(false), 150); // 스크롤 멈춘 후 150ms 뒤 false
    };

    element.addEventListener('scroll', handleScroll);

    return () => {
      element.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, [ref]);

  return isDragging;
};
