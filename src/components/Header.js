import React from 'react';

const Header = () => {
    return (
        <header>
            <div className='header'>
                <h1 id='title'>Blue Sky</h1>
                <h3 id='subtitle'><em>Good Food - Great Mood</em></h3>
            </div>
            <img src='outside.png' />
        </header>
    );
}
 
export default Header;