import React, { useEffect, useRef } from "react";
import useWindowDimensions from "../useWindowDimensions";

// map component, uses 'useWindowDimentions' hook to resize based on window changes
// integrates Google Maps API

const Map = () => {
  const { width, height } = useWindowDimensions()
  const coords = { lat: 37.78529192302338, lng: -79.44426887837906 } // blue sky coordinates

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


