import React from 'react';

import './Brands.css'

const Brands = () => {
    return (
        <div className="container-brands">
            <div className="brands">
                <a href="#">
                    <img src="../../img/brands-img/orjade.png" alt="orjade"/>
                </a>
                <a href="#">
                    <img src="../../img/brands-img/ronas.png" alt="ronas"/>
                </a>
                <a href="#">
                    <img src="../../img/brands-img/merikit.png" alt="merikit"/>
                </a>
                <a href="#">
                    <img src="../../img/brands-img/premium.png" alt="premium"/>
                </a>
            </div>
        </div>
    );
}

export default Brands;