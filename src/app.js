import React from 'react'
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Buttons from './components/Buttons';

// root app component

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <Buttons />
            <Content />
            <Footer />
        </div>
    );
}
 
export default App;