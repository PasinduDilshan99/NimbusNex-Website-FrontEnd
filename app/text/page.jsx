'use client'
import React, { useEffect, useState } from 'react';
import NavBar from '../components/navBar/NavBar';
import ScrollNavBar from '../components/scrollNavBar/ScrollNavBar';

const Page = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='min-h-[150vh]'>
      <div
        className={`fixed top-0 left-0 w-full transition-opacity duration-1000 ease-in-out ${
          scrolling ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ zIndex: scrolling ? 10 : 20 }}
      >
        <NavBar />
      </div>
      <div
        className={`fixed top-0 left-0 w-full transition-opacity duration-1000 ease-in-out ${
          scrolling ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ zIndex: scrolling ? 20 : 10 }}
      >
        <ScrollNavBar />
      </div>
    </div>
  );
};

export default Page;
