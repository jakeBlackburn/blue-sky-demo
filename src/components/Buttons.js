import React from 'react'

// links to GloriaFood API, allows online orders and table reservations

const Buttons = () => {
    return (     
        <div id="buttons">
            <span className="menu" data-glf-cuid="d60d3a38-ac6b-40a6-8f8f-9d5c994ac103" data-glf-ruid="5827ca57-3ae7-45c3-bc94-20224a22e38c" > See Menu & Order</span> 
            <span className="reservation" data-glf-cuid="d60d3a38-ac6b-40a6-8f8f-9d5c994ac103" data-glf-ruid="5827ca57-3ae7-45c3-bc94-20224a22e38c" data-glf-reservation="true" > Table Reservation</span>
        </div> 
    );
}
 
export default Buttons;