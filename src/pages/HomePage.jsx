import React from 'react';

import Intro from '../components/Intro/Intro';
import Brands from '../components/Brands/Brands';
import Popular from '../components/Popular/Popular';
import Sale from '../components/Sale/Sale';
import Lines from '../components/Lines/Lines';

export default function HomePage() {
    return (
        <div className="wrapper">
            <Intro />
            <Brands />
            <Popular />

            <div className="container">
                <Sale />
                <Lines /> 
            </div> 
        </div>
    );
}