import React, { useEffect, useRef } from 'react';
import { Anchors, Link } from '../AllSvgs';

export const Anchor = () => {
  const ref = useRef(null);
  const hideREf = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
      //diff*100/scrollposition
      let diffP = (diff * 100) / (bodyHeight - windowSize);

      ref.current.style.transform = `translateY(${-diffP}%)`;

      if (window.pageYOffset > 5) {
        hideREf.current.style.display = 'none';
      } else {
        hideREf.current.style.display = 'block';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="Anchor">
      <div className="PreDisplay hidden" ref={hideREf}>
        <Anchors width={70} height={70} fill="currentColor" />
      </div>

      <div className="slider" ref={ref}>
        {[...Array(25)].map((x, id) => {
          return (
            <Link
              key={id}
              width={25}
              height={25}
              fill="currentColor"
              className="chain"
            />
          );
        })}

        <Anchors
          className="Anchors"
          width={70}
          height={70}
          fill="currentColor"
        />
      </div>
    </div>
  );
};
