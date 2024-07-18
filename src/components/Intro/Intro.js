import React, { useState } from 'react';
import './Intro.css';

const Intro = () => {
    
    const [currentSlide, setCurrentSlide] = useState(0);

    const showSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    const handlePrevClick = () => {
        let newSlide = currentSlide - 1;
        if (newSlide < 0) {
            newSlide = 2;
        }
        showSlide(newSlide);
    };

    const handleNextClick = () => {
        let newSlide = currentSlide + 1;
        if (newSlide > 2) {
            newSlide = 0;
        }
        showSlide(newSlide);
    };

    return (
        <div className="intro">
            <div className="slider">
                <div className="slider-container" style={{ transform: `translateX(-${currentSlide * 100}%)`}}>
                    <img src="../../img/intro-img/slider1.jpg" alt="sliderImage 1"/>
                    <img src="../../img/intro-img/slider2.jpg" alt="sliderImage 2"/>
                    <img src="../../img/intro-img/slider3.jpg" alt="sliderImage 3"/>
                </div>
                <button className="prev-btn" onClick={handlePrevClick}>
                    <img src="../../img/intro-img/arrow_left.svg" alt="prev img"/>
                </button>
                <button className="next-btn" onClick={handleNextClick}>
                    <img src="../../img/intro-img/arrow_right.svg" alt="next img"/>
                </button>
            </div>
        </div>
    );
};

export default Intro;