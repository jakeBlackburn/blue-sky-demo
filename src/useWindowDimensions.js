import { useState, useEffect } from 'react';

function getWindowDimensions() {
  let { innerWidth: width } = window;
  if (width >= 780) {
    return {width: (width / 2), height: 400}
  } else if (width >= 450) {
    return {width: (width - 100), height: 400}
  } else {
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