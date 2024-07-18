import React from 'react';
import './SpecialOffer.css';

const SpecialOffer = () => {
    return (
        <div className="sale-container">
            <h1>Акции и специальные предложения</h1>
            <div className="sale-cards">

                <div className="sale-item">
                    <img src="../../img/sale-img/sale1.jpg" alt="sale1"/>
                    <div className="sale-desc">
                        <h2>Летние подарки за покупки! Встречаем лето!</h2>
                        <p>При заказе от 2500 рублей - арома-спрей на выбор:</p>
                        <ul>
                            <li><a href="/catalog">Аромаспрей освежающий</a></li>
                            <li><a href="/catalog">Аромаспрей тонизирующий с коллагеном</a></li>
                        </ul>
                        <p>При заказе от 5000 рублей - средство интенсивного ухода на выбор:</p>
                        <ul>
                            <li><a href="/catalog">Крем-гель коллагеновый глубокого увлажнения</a></li>
                            <li><a href="/catalog">Крем-маска Антиугревая с глиной и углём</a></li>
                            <li><a href="/catalog">Крем-маска Депигментирующая</a></li>
                        </ul>
                    </div>
                </div>

                <div className="sale-item">
                    <div className="sale-desc">
                        <h2>Самый жаркий месяц года наступил!</h2>
                        <p>Сезон отпусков и путешествий в самом разгаре, а значит - мы будем дарить классные подарки за покупки:</p>
                        <p>При заказе от 3000 рублей - travel-пенка на выбор:</p>
                        <ul>
                            <li><a href="/catalog">Пенка-молочко для умывания «Milk Foam»</a></li>
                            <li><a href="/catalog">Пенка для умывания «Sea Foam»</a></li>
                            <li><a href="/catalog">Фитопенка для умывания «Ice Foam»</a></li>
                        </ul>
                        <p>При заказе от 5000 рублей - средство-сюрприз для интенсивного ухода!</p>
                    </div>
                    <img src="../../img/sale-img/sale2.jpg" alt="sale2"/>
                </div>

            </div>
        </div>
    )
}

export default SpecialOffer;