import React from 'react';

import './Sale.css';

const Sale = () => {
    return (
        <div className="sale">
            <img className="sale-img" src="../../img/sale-img/sale-img.png" alt="sale image"/>
            <div className="sale-text">
                <p className="sale-desc">скидка</p>
                <p className="sale-number">20%</p>
                <p className="sale-desc">на комплексный уход</p>
                <button className="sale-btn">выбрать набор</button>
            </div>
        </div>
    );
}

export default Sale;