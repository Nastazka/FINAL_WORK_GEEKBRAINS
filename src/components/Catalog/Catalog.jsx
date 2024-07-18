import React, { useEffect } from 'react';

import './Catalog.css';

const Catalog = () => {
    const showSection = (section, linkName) => {
        document.querySelectorAll('.for_face, .for_orjade, .for_homework').forEach(section => {
            section.classList.remove('active');
        });

        document.querySelector(`.for_${section}`).classList.add('active');

        const activeBlock = document.querySelector('.active');
        const userInfoBlock = document.querySelector('.categories');
        userInfoBlock.style.height = activeBlock.clientHeight + 'px';

        document.querySelector('.section_name').textContent = linkName;
    };

    useEffect(() => {
        showSection('orjade');
    }, []);


    return (
        <div>
            <h1>каталог косметики</h1>
            <div className="categories">
                <p>Категории</p>
                <nav>
                    <a onClick={() => showSection('orjade', 'ORJADE (Корея)')}>ORJADE (Корея)</a>
                    <a href="#">RONAS (Корея)</a>
                    <a href="#">MERIKIT (Корея)</a>
                    <a href="#">тоники</a>
                    <a href="#">веки</a>
                    <a href="#">патчи</a>
                    <a href="#">уход за руками</a>
                    <a onClick={() => showSection('face', 'Кремы для лица')}>кремы для лица</a>
                    <a onClick={() => showSection('homework', 'Линии домашнего ухода')}>линии домашнего ухода</a>
                    <a href="#">декоративная косметика</a>
                    <a href="#">уход за ногами</a>
                    <a href="#">массажная линия</a>
                    <a href="#">готовые процедуры домашнего ухода</a>
                    <a href="#">наборы</a>
                    <a href="#">защита от солнца</a>
                    <a href="#">программы ухода за телом</a>
                    <a href="#">линия мужского ухода</a>
                    <a href="#">для barbershop</a>
                    <a href="#">программа биоэпиляции</a>
                </nav>
            </div>

            <div className="bread_crumbs">
                <a href="#">Главная</a>
                <p>/</p>
                <a href="#">Каталог</a>
                <p>/</p>
                <a className="section_name">Кремы для лица</a>
            </div>

            <div className="catalog-container">
            <div className="catalog for_face">
                    <div className="catalog_list">

                        <div className="catalog-item">
                            <img src="../../img/catalog-img/MULTIPEPTIDE.jpg" alt="Крем для тела body tonus"/>
                            <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                            <div className="card_footer">
                                <p className="product_price">1840 ₽</p>
                                <div className="card_footer-icons">
                                    <button><img className="basket-img" src="../../img/catalog-img/basket.svg" alt="basket"/></button>
                                    <button><img className="like-img" src="../../img/catalog-img/like.svg" alt="like"/></button>
                                </div>  
                            </div>
                        </div>

                        <div className="catalog-item">
                            <img src="../../img/catalog-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                            <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                            <div className="card_footer">
                                <p className="product_price">1840 ₽</p>
                                <div className="card_footer-icons">
                                    <button><img className="basket-img" src="../../img/catalog-img/basket.svg" alt="basket"/></button>
                                    <button><img className="like-img" src="../../img/catalog-img/like.svg" alt="like"/></button>
                                </div>
                            </div>
                        </div>

                        <div className="catalog-item">
                            <img src="../../img/catalog-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                            <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                            <div className="card_footer">
                                <p className="product_price">1840 ₽</p>
                                <div className="card_footer-icons">
                                    <button><img className="basket-img" src="../../img/catalog-img/basket.svg" alt="basket"/></button>
                                    <button><img className="like-img" src="../../img/catalog-img/like.svg" alt="like"/></button>
                                </div>
                            </div>    
                        </div>

                        <div className="catalog-item">
                            <img src="../../img/catalog-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                            <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                            <div className="card_footer">
                                <p className="product_price">1840 ₽</p>
                                <div className="card_footer-icons">
                                    <button><img className="basket-img" src="../../img/catalog-img/basket.svg" alt="basket"/></button>
                                    <button><img className="like-img" src="../../img/catalog-img/like.svg" alt="like"/></button>
                                </div>
                            </div>    
                        </div>

                    </div>
                </div>

                <div className="catalog for_orjade active">
                    <div className="catalog_list">

                        <div className="catalog-item">
                            <img src="../../img/catalog-img/BODY_TONUS.png" alt="Крем для тела body tonus"/>
                            <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                            <div className="card_footer">
                                <p className="product_price">1840 ₽</p>
                                <div className="card_footer-icons">
                                    <button><img className="basket-img" src="../../img/catalog-img/basket.svg" alt="basket"/></button>
                                    <button><img className="like-img" src="../../img/catalog-img/like.svg" alt="like"/></button>
                                </div>  
                            </div>
                        </div>

                        <div className="catalog-item">
                            <img src="../../img/catalog-img/BODY_TONUS.png" alt="Крем для лица MULTIPEPTIDE C50"/>
                            <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                            <div className="card_footer">
                                <p className="product_price">1840 ₽</p>
                                <div className="card_footer-icons">
                                    <button><img className="basket-img" src="../../img/catalog-img/basket.svg" alt="basket"/></button>
                                    <button><img className="like-img" src="../../img/catalog-img/like.svg" alt="like"/></button>
                                </div>
                            </div>
                        </div>

                        <div className="catalog-item">
                            <img src="../../img/catalog-img/BODY_TONUS.png" alt="Крем для лица MULTIPEPTIDE C50"/>
                            <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                            <div className="card_footer">
                                <p className="product_price">1840 ₽</p>
                                <div className="card_footer-icons">
                                    <button><img className="basket-img" src="../../img/catalog-img/basket.svg" alt="basket"/></button>
                                    <button><img className="like-img" src="../../img/catalog-img/like.svg" alt="like"/></button>
                                </div>
                            </div>    
                        </div>

                        <div className="catalog-item">
                            <img src="../../img/catalog-img/BODY_TONUS.png" alt="Крем для лица MULTIPEPTIDE C50"/>
                            <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                            <div className="card_footer">
                                <p className="product_price">1840 ₽</p>
                                <div className="card_footer-icons">
                                    <button><img className="basket-img" src="../../img/catalog-img/basket.svg" alt="basket"/></button>
                                    <button><img className="like-img" src="../../img/catalog-img/like.svg" alt="like"/></button>
                                </div>
                            </div>    
                        </div>

                    </div>
                </div>

                <div className="catalog for_homework">
                    <div className="catalog_list">

                        <div className="catalog-item">
                            <img src="../../img/catalog-img/GREEN_THERAPY.jpg" alt="Крем для тела body tonus"/>
                            <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                            <div className="card_footer">
                                <p className="product_price">1840 ₽</p>
                                <div className="card_footer-icons">
                                    <button><img className="basket-img" src="../../img/catalog-img/basket.svg" alt="basket"/></button>
                                    <button><img className="like-img" src="../../img/catalog-img/like.svg" alt="like"/></button>
                                </div>  
                            </div>
                        </div>

                        <div className="catalog-item">
                            <img src="../../img/catalog-img/GREEN_THERAPY.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                            <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                            <div className="card_footer">
                                <p className="product_price">1840 ₽</p>
                                <div className="card_footer-icons">
                                    <button><img className="basket-img" src="../../img/catalog-img/basket.svg" alt="basket"/></button>
                                    <button><img className="like-img" src="../../img/catalog-img/like.svg" alt="like"/></button>
                                </div>
                            </div>
                        </div>

                        <div className="catalog-item">
                            <img src="../../img/catalog-img/GREEN_THERAPY.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                            <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                            <div className="card_footer">
                                <p className="product_price">1840 ₽</p>
                                <div className="card_footer-icons">
                                    <button><img className="basket-img" src="../../img/catalog-img/basket.svg" alt="basket"/></button>
                                    <button><img className="like-img" src="../../img/catalog-img/like.svg" alt="like"/></button>
                                </div>
                            </div>    
                        </div>

                        <div className="catalog-item">
                            <img src="../../img/catalog-img/GREEN_THERAPY.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                            <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                            <div className="card_footer">
                                <p className="product_price">1840 ₽</p>
                                <div className="card_footer-icons">
                                    <button><img className="basket-img" src="../../img/catalog-img/basket.svg" alt="basket"/></button>
                                    <button><img className="like-img" src="../../img/catalog-img/like.svg" alt="like"/></button>
                                </div>
                            </div>    
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Catalog;