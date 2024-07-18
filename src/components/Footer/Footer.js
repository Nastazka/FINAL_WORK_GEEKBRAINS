import React from 'react';

import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-container">
                  <div className="shop">
                      <p className="shop-title">Интернет-магазин</p>
                      <a href="/brands">Бренды</a>
                      <a href="/catalog">Популярные товары</a>
                      <a href="/sale">Акции</a>
                  </div>
                  <div className="info">
                      <p className="info-title">Информация</p>
                      <a href="/delivery">Оплата и доставка</a>
                      <a href="#">Возврат</a>
                      <a href="#">Вакансии</a>
                      <a href="#">Подарочные сертификаты</a>
                  </div>
                  <div className="company">
                    <p className="company-title">О компании</p>
                    <p className="company-desc">ООО «ЭЛИТЕ»<br/>Юридический адрес:<br/>160031, Вологодская область,<br/>г. Вологда, ул. Чехова, д. 13, оф. 16<br/><br/>ИНН:3525237340<br/>ОГРН: 1103525003450<br/><br/>Пользовательское соглашение<br/><br/>Обработка персональных данных</p>
                  </div>
                  <div className="contacts">
                      <p className="contacts-title">Контакты</p>
                      <div className="contacts-container">
                          <div className="contacts-icons">
                              <img src="../../img/footer-img/telephone.svg" alt="telephone"/>
                              <img src="../../img/footer-img/mail.svg" alt="mail"/>
                              <img src="../../img/footer-img/location.svg" alt="location"/>
                          </div>
                          <div className="contacts-text">
                              <a href="#">8 (999) 999 99 99</a>
                              <a href="#">pochta@mail.ru</a>
                              <a>160031, г. Вологда,
                                  ул. Чехова, д. 13</a>
                          </div>
                      </div>
                      
                  </div>
                  <div className="questions">
                      <p className="question">Остались вопросы?</p>
                      <p className="action">Напишите нам!</p>
                      <div className="social-icons">
                          <a href="#"><img src="../../img/footer-img/vk.svg" alt="vk"/></a>
                          <a href="#"><img src="../../img/footer-img/whatsapp.svg" alt="whatsapp"/></a>
                          <a href="#"><img src="../../img/footer-img/instagram.svg" alt="insta"/></a>
                      </div>
                  </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;