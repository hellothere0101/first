import React, { useState } from 'react';
import styles from './Slider.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={styles.slider}>
            <div className={styles.prevButton} onClick={handlePrevSlide}><FiChevronLeft /></div>
            <div className={styles.middle}>
                <img src={`/images/${slides[currentIndex]}`} alt="Slide" className={styles.slideImage} />
                <div className={styles.slideCount}>
                    {currentIndex + 1} / {slides.length}
                </div>
            </div>
            
            <div className={styles.nextButton} onClick={handleNextSlide}><FiChevronRight /></div>
        </div>
    );
};

export default Slider;