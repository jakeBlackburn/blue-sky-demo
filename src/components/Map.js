import React, { useEffect, useRef } from "react";
import useWindowDimensions from "../useWindowDimensions";





const Map = () => {

    const { width, height } = useWindowDimensions()
    const coords = { lat: 37.78529192302338, lng: -79.44426887837906 }


    const ref = useRef();

    useEffect(() => {
      new window.google.maps.Map(ref.current, {
        center: coords,
        zoom: 18,
      });
    });


    return <div ref={ref} id="map" style={{width: width, height: height}}/>;

}

export default Map;


