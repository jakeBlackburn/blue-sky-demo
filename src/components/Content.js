import React from 'react';
import Map from './Map'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Loading from './Loading'

const key = process.env.GOOGLE_MAPS_API_KEY

const render = (status) => {
    if (status === Status.LOADING) return <Loading />;
};

const Content = () => {
    
    return (
        <section className='content'>
            <section className='about'>
                <h3 id="about">About Blue Sky</h3>
                <p><strong>11 am - 3pm</strong><br />Monday - Saturday</p>
                <p>Featuring regional daily specials made with fresh, locally sourced ingredients.  Enjoy real food in a comfortable atmosphere.</p>
            </section>
            
            <section className="map">
                <div className="map-text">
                    <h5 id='maptitle'>Find Us - <em>125 West Nelson Street</em></h5>
                    <a className="gm-link" href="https://www.google.com/maps/place/Blue+Sky+Bakery/@37.7852794,-79.4464588,17z/data=!3m1!4b1!4m5!3m4!1s0x884ccbb93cedf141:0xa46ef24529eae5b6!8m2!3d37.785271!4d-79.4443123">View on Google Maps</a>
                </div>
                <Wrapper apiKey={ key } render={ render }>
                     <Map />
                </Wrapper>
            </section>
            

        </section>
        );
}
 
export default Content;