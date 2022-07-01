import { useState, useEffect } from 'react';

function getWindowDimensions() {
  let { innerWidth: width, innerHeight: height } = window;
  if (width >= 780) {
    // width = width / 2;
    // height = 400;
    return {width: (width / 2), height: 400}
  } else if (width >= 450) {
    // width = width - 100;
    //height = 400
    return {width: (width - 100), height: 400}
  } else {
    // height = 250;
    // width = width - 65;
    return {width: (width - 65), height: 250}
  }

}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}