import React from 'react';
import image from '../../public/outside.png'

// header and heroimage

const Header = () => {
    return (
        <header>
            <div className='header'>
                <h1 id='title'>Blue Sky</h1>
                <h3 id='subtitle'><em>Good Food - Great Mood</em></h3>
            </div>
            <img src={image} />
        </header>
    );
}
 
export default Header;