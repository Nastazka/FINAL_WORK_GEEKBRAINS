import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {
    return (
        <div>
            <Header />
            <Footer />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)