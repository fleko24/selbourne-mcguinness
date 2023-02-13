import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './slider.style.scss';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: '/trade/trade-1.jpg' },
    { src: '/trade/trade-2.jpg' },
    { src: '/trade/trade-3.jpg' },
    { src: '/trade/trade-4.jpg' },
    { src: '/trade/trade-5.jpg' },
    { src: '/trade/trade-6.jpg' },
    { src: '/trade/trade-7.jpg' },
    { src: '/trade/uni-2.jpg' },
    { src: '/trade/uni-3.jpg' },
    { src: '/trade/uni-4.jpg' }
  ];

  const nextImage = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div className="image-slider-container">
      <img
        className="image-slider-img"
        src={images[currentIndex].src}
        alt="images"
      />
      <div className="image-slider-buttons">
        <button onClick={prevImage} >
          <ArrowBackIosIcon className="image-slider-button-left"/>
        </button>
        <button onClick={nextImage} >
        <ArrowForwardIosIcon className="image-slider-button-right"/>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
