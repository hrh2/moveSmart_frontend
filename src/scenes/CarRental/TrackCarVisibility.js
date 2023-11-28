import React, { useEffect, useRef } from 'react';

function TrackableView({ onInView }) {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        onInView();
        observer.unobserve(ref.current);
      }
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [onInView]);

  return <div ref={ref} />;
}

export default TrackableView;
