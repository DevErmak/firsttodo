import { useEffect, useRef, useState } from 'react';
import './weather.css';

export default function Temperature({ weathers, setIndex, index }) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const handleScroll = (event) => {
      if (event.deltaY > 0 && index < weathers.length - 1) {
        console.log('--------->up');
        setIndex((prevIndex) => {
          const currentDate = new Date(weathers[prevIndex].dt * 1000);
          if (currentDate.getHours() === 21) {
            return prevIndex;
          } else return prevIndex + 1;
        });
      } else if (event.deltaY < 0 && index > 0) {
        setIndex((prevIndex) => {
          const currentDate = new Date(weathers[prevIndex].dt * 1000);
          if (currentDate.getHours() === 0) {
            return prevIndex;
          } else return prevIndex - 1;
        });
      }
    };

    scrollContainer.addEventListener('wheel', handleScroll);

    return () => {
      scrollContainer.removeEventListener('wheel', handleScroll);
    };
  }, [index, weathers.length]);

  return (
    <div className="temperature" ref={scrollContainerRef}>
      <div className="temp-c">{(weathers[index].main.temp - 273.15).toFixed(2)}°C</div>
    </div>
  );
}
