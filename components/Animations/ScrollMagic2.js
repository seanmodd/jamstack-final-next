import { useRef, useEffect, useState } from 'react';

const primaryImg = 'https://i.imgur.com/aswTYQr.jpeg';
const secondaryImg = 'https://i.imgur.com/OxtoNai.jpeg';

function ScrollMagic() {
  const imageRef = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });
  const [inView, setInView] = useState(false);

  const isInView = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  const scrollHandler = () => {
    setInView(() => isInView());
  };
  return (
    <>
      <img src={inView ? secondaryImg : primaryImg} ref={imageRef} />
    </>
  );
}

export default ScrollMagic;
