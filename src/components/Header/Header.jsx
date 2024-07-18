import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './Header.css';

import HomePage from '../../pages/HomePage'
import CatalogPage from '../../pages/CatalogPage'
import BrandsPage from '../../pages/BrandsPage'
import AccountPage from '../../pages/AccountPage'
import SpecialOffer from '../SpecialOffer/SpecialOffer'

const Header = () => {
    const handleAccountClick = () => {
        const activeBlock = document.querySelector('.active');
        const userInfoBlock = document.querySelector('.user-info');
        userInfoBlock.style.height = activeBlock.clientHeight + 'px';
    }

    return (
        <BrowserRouter>
            <header>
                <div className="header__container">
                    <div className="header__top">
                        <div className="location">
                            <button id="location"></button>
                            <label htmlFor="location">вологда</label>
                        </div>
                        <Link to="/" className="logo_img">
                            <img src="../../img/header-img/LOGO.svg" alt="logo"/>
                        </Link>
                        <div className="header__icons">
                            <Link to="/search" className="header__icon">
                                <img src="../../img/header-img/search.svg" alt="search"/>
                            </Link>
                            <Link to="/account/history" className="header__icon" onClick={handleAccountClick}>
                                <img src="../../img/header-img/account.svg" alt="account"/>
                            </Link>
                            <Link to="/account/saves" className="header__icon">
                                <img src="../../img/header-img/like.svg" alt="like"/>
                            </Link>
                            <Link to="/account/basket" className="header__icon">
                                <img src="../../img/header-img/basket.svg" alt="basket"/>
                            </Link>
                        </div>
                    </div>

                    <div className="header__nav">
                        <nav>
                            <Link to="/catalog">Каталог</Link>
                            <Link to="/brands">Бренды</Link>
                            <Link to="/sale">Акции</Link>
                            <Link to="/delivery">Доставка и оплата</Link>
                            <Link to="/contacts">Контакты</Link>
                        </nav>
                    </div>
                </div>
            </header>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/search" element={} /> */}
                <Route path="/account/*" element={<AccountPage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/brands" element={<BrandsPage />} />
                <Route path="/sale" element={<SpecialOffer />} />
                {/* <Route path="/delivery" element={} />
                <Route path="/contacts" element={} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default Header;