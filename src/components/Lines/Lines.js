import React from 'react';

import './Lines.css';

const Lines = () => {
    return (
        <div className="lines">
            <p className="line-title">линии ухода</p>
            <div className="lines-cards">
                <div className="line-card">
                    <img src="../../img/lines-img/line_face.png" alt="face"/>
                    <p className="line-name">Для лица</p>
                </div>
                <div className="line-card">
                    <img src="../../img/lines-img/line_body.png" alt="face"/>
                    <p className="line-name">Для тела</p>
                </div>
                <div className="line-card">
                    <img src="../../img/lines-img/line_hands.png" alt="face"/>
                    <p className="line-name">Для рук</p>
                </div>
                <div className="line-card">
                    <img src="../../img/lines-img/line_man.png" alt="face"/>
                    <p className="line-name">Для мужчин</p>
                </div>
            </div>
        </div>
    );
}
        
export default Lines;    