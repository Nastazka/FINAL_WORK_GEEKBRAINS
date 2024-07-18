import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './AccountAside.css'

const AccountAside = () => {

    const navigate = useNavigate();

    const showSection = (section) => {
        document.querySelectorAll('.history-main, .saves-main, .basket-main').forEach(section => {
            section.classList.remove('active');
        });

        document.querySelector(`.${section}-main`).classList.add('active');

        const activeBlock = document.querySelector('.active');
        const userInfoBlock = document.querySelector('.user-info');
        userInfoBlock.style.height = activeBlock.clientHeight + 100 + 'px';
    }

    useEffect(() => {
        const section = window.location.pathname.split('/').pop();
        showSection(section);
    }, [window.location.pathname]);

    const navigateToSection = (section) => {
        showSection(section);
        navigate(`/account/${section}`);
    }

    return (
        <div className="container-user">
            <div className="user-info">
                <img src="../../img/account-img/user-photo.png" alt="user-photo"/>
                <div className="personal-info">
                    <p className="username">Анастасия</p>
                    <p className="user-mail">nastazka8@gmail.com</p>
                    <p className="user-phone">+7 (921) 829-11-47</p>
                    <p className="user-adress">г. Москва, ул. Бутлерова, д.3</p>
                </div>
                <div className="personal-info-edit">
                    <a href="#">Редактировать личные данные</a>
                    <a href="#">Изменить пароль</a>
                </div>
                <div className="account-menu">
                    <a className="saves-link" href="#" onClick={() => navigateToSection('saves')}>Список желаний</a>
                    <a href="#" onClick={() => navigateToSection('history')}>История покупок</a>
                    <a href="#" onClick={() => navigateToSection('basket')}>Корзина</a>
                </div>
            </div>

            <main>
                <div className="info-container">
                    <div className="tabs">
                        <div className="history-main">
                            <p className="history-title">история покупок</p>
                            <div className="on_the_way">
                                <div className="history-way-item">
                                    <div className="order-info">
                                        <div className="order-status">
                                            <p className="status-text">в пути</p>
                                            <p className="order-number">A-049283946</p>
                                        </div>
                                        <div className="order-dates">
                                            <div className="order-date">
                                                <p className="order-day">15</p>
                                                <p className="order-month">марта</p>
                                                <p className="order-date_text">дата заказа</p>
                                            </div>
                                            <div className="arrow">
                                                <img src="../../img/account-img/order-arrow.svg" alt="arrow"/>
                                            </div>
                                            <div className="order-completion">
                                                <p className="order-day">19</p>
                                                <p className="order-month">марта</p>
                                                <p className="order-date_text">дата выполнения</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-filling">
                                        <div className="composition">
                                            <p className="composition-number">состав: 2 шт</p>
                                            <div className="composition-products">
                                                <img src="../../img/account-img/multipeptide_order.png" alt="multipeptide"/>
                                                <img src="../../img/account-img/bodyTonus-order.png" alt="bodyTonus"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-amount">
                                        <p className="order-amount_text">Сумма:</p>
                                        <p className="order-amount_number">4 093 ₽</p>
                                    </div>
                                </div>
                            </div>

                            <div className="delivered">
                                <div className="history-way-item">
                                    <div className="order-info">
                                        <div className="order-status">
                                            <p className="status-text" id="delivered">доставлен</p>
                                            <p className="order-number">М-050283982</p>
                                        </div>
                                        <div className="order-dates">
                                            <div className="order-date">
                                                <p className="order-day">12</p>
                                                <p className="order-month">октября</p>
                                                <p className="order-date_text">дата заказа</p>
                                            </div>
                                            <div className="arrow">
                                                <img src="../../img/account-img/order-arrow.svg" alt="arrow"/>
                                            </div>
                                            <div className="order-completion">
                                                <p className="order-day">17</p>
                                                <p className="order-month">октября</p>
                                                <p className="order-date_text">дата выполнения</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-filling">
                                        <div className="composition">
                                            <p className="composition-number">состав: 2 шт</p>
                                            <div className="composition-products">
                                                <img src="../../img/account-img/multipeptide_order.png" alt="multipeptide"/>
                                                <img src="../../img/account-img/bodyTonus-order.png" alt="bodyTonus"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-amount">
                                        <p className="order-amount_text">Сумма:</p>
                                        <p className="order-amount_number">4 093 ₽</p>
                                    </div>
                                </div>
                            </div>
                        </div>  

                        <div className="saves-main">
                            <p className="saves-title">список желаний</p>
                            <div className="saves-items">
                                <div className="saves-item">
                                    <img src="../../img/account-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                                    <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                                    <div className="card_footer">
                                    <button className="add-to-cart">Добавить в корзину</button>
                                    <button className="like-btn"><img className="like-img" src="../../img/account-img/like_select.svg" alt="like"/></button>
                                    </div>
                                </div>

                                <div className="saves-item">
                                    <img src="../../img/account-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                                    <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                                    <div className="card_footer">
                                    <button className="add-to-cart">Добавить в корзину</button>
                                    <button className="like-btn"><img className="like-img" src="../../img/account-img/like_select.svg" alt="like"/></button>
                                    </div>
                                </div>

                                <div className="saves-item">
                                    <img src="../../img/account-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                                    <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                                    <div className="card_footer">
                                    <button className="add-to-cart">Добавить в корзину</button>
                                    <button className="like-btn"><img className="like-img" src="../../img/account-img/like_select.svg" alt="like"/></button>
                                    </div>
                                </div>

                                <div className="saves-item">
                                    <img src="../../img/account-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                                    <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                                    <div className="card_footer">
                                    <button className="add-to-cart">Добавить в корзину</button>
                                    <button className="like-btn"><img className="like-img" src="../../img/account-img/like_select.svg" alt="like"/></button>
                                    </div>
                                </div>

                                <div className="saves-item">
                                    <img src="../../img/account-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                                    <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                                    <div className="card_footer">
                                    <button className="add-to-cart">Добавить в корзину</button>
                                    <button className="like-btn"><img className="like-img" src="../../img/account-img/like_select.svg" alt="like"/></button>
                                    </div>
                                </div>

                                <div className="saves-item">
                                    <img src="../../img/account-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                                    <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                                    <div className="card_footer">
                                    <button className="add-to-cart">Добавить в корзину</button>
                                    <button className="like-btn"><img className="like-img" src="../../img/account-img/like_select.svg" alt="like"/></button>
                                    </div>
                                </div>

                                <div className="saves-item">
                                    <img src="../../img/account-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                                    <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                                    <div className="card_footer">
                                    <button className="add-to-cart">Добавить в корзину</button>
                                    <button className="like-btn"><img className="like-img" src="../../img/account-img/like_select.svg" alt="like"/></button>
                                    </div>
                                </div>

                                <div className="saves-item">
                                    <img src="../../img/account-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                                    <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                                    <div className="card_footer">
                                    <button className="add-to-cart">Добавить в корзину</button>
                                    <button className="like-btn"><img className="like-img" src="../../img/account-img/like_select.svg" alt="like"/></button>
                                    </div>
                                </div>

                                <div className="saves-item">
                                    <img src="../../img/account-img/MULTIPEPTIDE.jpg" alt="Крем для лица MULTIPEPTIDE C50"/>
                                    <p className="product_name">Крем для лица MULTIPEPTIDE C50</p>
                                    <div className="card_footer">
                                    <button className="add-to-cart">Добавить в корзину</button>
                                    <button className="like-btn"><img className="like-img" src="../../img/account-img/like_select.svg" alt="like"/></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="basket-main">
                            <div className="basket-title">
                                <p className="basket-title_text">корзина</p>
                            </div>
                            <div className="basket-info">
                                <div className="basket-items">
                                    <div className="basket-item">
                                        <img src="../../img/account-img/MULTIPEPTIDE.jpg" alt="MULTIPEPTIDE"/>
                                        <div className="basket-item_info">
                                            <p className="product-name">Крем для лица Multipeptide + C 50</p>
                                            <p className="product-article">артикул: 25136745951</p>
                                            <p className="product-volume">Объём: 50 мл</p>
                                            <p className="product-price">1 840 ₽</p>
                                        </div>
                                    </div>
                                    <div className="basket-item">
                                        <img src="../../img/account-img/MULTIPEPTIDE.jpg" alt="MULTIPEPTIDE"/>
                                        <div className="basket-item_info">
                                            <p className="product-name">Крем для лица Multipeptide + C 50</p>
                                            <p className="product-article">артикул: 25136745951</p>
                                            <p className="product-volume">Объём: 50 мл</p>
                                            <p className="product-price">1 840 ₽</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="basket-form">
                                    <p className="form-title">заполните форму</p>
                                    <form action="submit">
                                        <input className="form-input" type="text" placeholder="Ваше имя"/>
                                        <input className="form-input" type="phone" placeholder="Номер телефона"/>
                                        <input className="form-input" type="email" placeholder="E-mail"/>
                                        <input className="form-input" type="text" placeholder="Адрес"/>
                                    </form>
                                    <div className="form-options">
                                        <div className="payment">
                                            <p className="payment-title">Способ оплаты</p>
                                            <div className="option">
                                                <input type="radio" id="by_card_online"/>
                                                <label htmlFor="by_card_online">Картой онлайн</label>
                                            </div>
                                            <div className="option">
                                                <input type="radio" id="by_card_upon_receipt"/>
                                                <label htmlFor="by_card_upon_receipt">Картой при получении</label>
                                            </div>
                                            <div className="option">
                                                <input type="radio" id="in_cash_upon_receipt"/>
                                                <label htmlFor="in_cash_upon_receipt">Наличными при получении</label>
                                            </div>
                                        </div>
                                        <div className="delivery">
                                            <p className="delivery-title">Способ доставки</p>
                                            <div className="option">
                                                <input type="radio" id="pickup"/>
                                                <label htmlFor="pickup">Самовывоз</label>
                                            </div>
                                            <div className="option">
                                                <input type="radio" id="by_mail"/>
                                                <label htmlFor="by_mail">Почтой</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="amount">
                                        <p className="amount-number">Итого: 3 680 ₽ </p>
                                    </div>
                                    <div className="payment-btn">
                                        <button className="pay-btn">оплатить</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>  
        </div>
    )
}

export default AccountAside;