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
                <h5 id='maptitle'>Find Us - <em>125 West Nelson Street</em></h5>
                <Wrapper apiKey={ key } render={render}>
                     <Map />
                </Wrapper>
            </section>
            

        </section>
        );
}
 
export default Content;