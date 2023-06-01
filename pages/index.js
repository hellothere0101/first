import React from 'react';
import Slider from '../components/Slider';

const HomePage = () => {
  const slides = [
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
  ];

  return (
    <div>
      <Slider slides={slides} />
    </div>
  );
};

export default HomePage;