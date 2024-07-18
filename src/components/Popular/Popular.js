import React, { useState } from 'react';

import './Popular.css';

const Popular = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const nextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
    };

    return (
        <div className="popular">
            <p className="popular-title">популярные средства</p>
            
            <div className="popular_slider">

                <div className="slider-list" style={{ transform: `translateX(-${slideIndex * 25}%)` }}>
        
                <div className="slider-item">
                    <img src="../../img/popular-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                    <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                    <div className="card_footer">
                    <p className="product_price">1840 ₽</p>
                    <div className="card_footer-icons">
                        <button><img className="basket-img" src="../../img/popular-img/basket.svg" alt="basket"/></button>
                        <button><img className="like-img" src="../../img/popular-img/like.svg" alt="like"/></button>
                    </div>
                    </div>
                </div>

                <div className="slider-item">
                    <img src="../../img/popular-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                    <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                    <div className="card_footer">
                    <p className="product_price">1840 ₽</p>
                    <div className="card_footer-icons">
                        <button><img className="basket-img" src="../../img/popular-img/basket.svg" alt="basket"/></button>
                        <button><img className="like-img" src="../../img/popular-img/like.svg" alt="like"/></button>
                    </div>
                    </div>
                </div>

                <div className="slider-item">
                    <img src="../../img/popular-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                    <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                    <div className="card_footer">
                    <p className="product_price">1840 ₽</p>
                    <div className="card_footer-icons">
                        <button><img className="basket-img" src="../../img/popular-img/basket.svg" alt="basket"/></button>
                        <button><img className="like-img" src="../../img/popular-img/like.svg" alt="like"/></button>
                    </div>
                    </div>
                </div>

                <div className="slider-item">
                    <img src="../../img/popular-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                    <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                    <div className="card_footer">
                    <p className="product_price">1840 ₽</p>
                    <div className="card_footer-icons">
                        <button><img className="basket-img" src="../../img/popular-img/basket.svg" alt="basket"/></button>
                        <button><img className="like-img" src="../../img/popular-img/like.svg" alt="like"/></button>
                    </div>
                    </div>
                </div>

                <div className="slider-item">
                    <img src="../../img/popular-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                    <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                    <div className="card_footer">
                    <p className="product_price">1840 ₽</p>
                    <div className="card_footer-icons">
                        <button><img className="basket-img" src="../../img/popular-img/basket.svg" alt="basket"/></button>
                        <button><img className="like-img" src="../../img/popular-img/like.svg" alt="like"/></button>
                    </div>
                    </div>
                </div>

                <div className="slider-item">
                    <img src="../../img/popular-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                    <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                    <div className="card_footer">
                    <p className="product_price">1840 ₽</p>
                    <div className="card_footer-icons">
                        <button><img className="basket-img" src="../../img/popular-img/basket.svg" alt="basket"/></button>
                        <button><img className="like-img" src="../../img/popular-img/like.svg" alt="like"/></button>
                    </div>
                    </div>
                </div>

                <div className="slider-item">
                    <img src="../../img/popular-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                    <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                    <div className="card_footer">
                    <p className="product_price">1840 ₽</p>
                    <div className="card_footer-icons">
                        <button><img className="basket-img" src="../../img/popular-img/basket.svg" alt="basket"/></button>
                        <button><img className="like-img" src="../../img/popular-img/like.svg" alt="like"/></button>
                    </div>
                    </div>
                </div>

                <div className="slider-item">
                    <img src="../../img/popular-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                    <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                    <div className="card_footer">
                    <p className="product_price">1840 ₽</p>
                    <div className="card_footer-icons">
                        <button><img className="basket-img" src="../../img/popular-img/basket.svg" alt="basket"/></button>
                        <button><img className="like-img" src="../../img/popular-img/like.svg" alt="like"/></button>
                    </div>
                    </div>
                </div>

                <div className="slider-item">
                    <img src="../../img/popular-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                    <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                    <div className="card_footer">
                    <p className="product_price">1840 ₽</p>
                    <div className="card_footer-icons">
                        <button><img className="basket-img" src="../../img/popular-img/basket.svg" alt="basket"/></button>
                        <button><img className="like-img" src="../../img/popular-img/like.svg" alt="like"/></button>
                    </div>
                    </div>
                </div>

                <div className="slider-item">
                    <img src="../../img/popular-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                    <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                    <div className="card_footer">
                    <p className="product_price">1840 ₽</p>
                    <div className="card_footer-icons">
                        <button><img className="basket-img" src="../../img/popular-img/basket.svg" alt="basket"/></button>
                        <button><img className="like-img" src="../../img/popular-img/like.svg" alt="like"/></button>
                    </div>
                    </div>
                </div>

                <div className="slider-item">
                    <img src="../../img/popular-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                    <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                    <div className="card_footer">
                    <p className="product_price">1840 ₽</p>
                    <div className="card_footer-icons">
                        <button><img className="basket-img" src="../../img/popular-img/basket.svg" alt="basket"/></button>
                        <button><img className="like-img" src="../../img/popular-img/like.svg" alt="like"/></button>
                    </div>
                    </div>
                </div>

                <div className="slider-item">
                    <img src="../../img/popular-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                    <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                    <div className="card_footer">
                    <p className="product_price">1840 ₽</p>
                    <div className="card_footer-icons">
                        <button><img className="basket-img" src="../../img/popular-img/basket.svg" alt="basket"/></button>
                        <button><img className="like-img" src="../../img/popular-img/like.svg" alt="like"/></button>
                    </div>
                    </div>
                </div>
        
                
        
                
                </div>

                <div className="slider-controls">
                    <button className="slider-prev" onClick={prevSlide}><img src="../../img/popular-img/arrow_left.svg" alt="prev"/></button>
                    <button className="slider-next" onClick={nextSlide}><img src="../../img/popular-img/arrow_right.svg" alt="next"/></button>
                </div>
            </div>
        </div>
    );
}

export default Popular;