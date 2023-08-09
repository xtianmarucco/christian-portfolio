import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Button } from './ScrollButtonStyle';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  useEffect(() => {
    // Add event listener only on the client-side
    window.addEventListener('scroll', toggleVisible);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount and unmount

  return (
    <Button>
      <FaArrowCircleUp
        fill="#52d053"
        size="4rem"
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
      />
    </Button>
  );
};

export default ScrollButton;