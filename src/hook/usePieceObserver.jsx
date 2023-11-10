import { useEffect, useRef } from 'react';

const UsePieceObserver = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    const options = { rootMargin: '0px 0px -20% 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('animate');
      });
    }, options);

    const childrenNodes = Array.from(targetRef.current?.children);

    childrenNodes.forEach((box) => observer.observe(box));
  }, []);

  return targetRef;
};

export default UsePieceObserver;
