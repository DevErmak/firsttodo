import { useEffect, useRef } from 'react';
import './weather.css';

export default function DateWeather({ weathers, setIndex, index, timezone }) {
  const GetDateRelativeCurrentСity = (timeDtSec) => {
    const currentDate = new Date(timeDtSec * 1000);
    const dateUTC = new Date(
      currentDate.getUTCFullYear(),
      currentDate.getUTCMonth(),
      currentDate.getUTCDay(),
      currentDate.getUTCHours(),
      currentDate.getUTCMinutes(),
      currentDate.getUTCSeconds(),
      currentDate.getUTCMilliseconds(),
    );
    return dateUTC.getTime() + timezone * 1000;
  };
  console.log('--------->weathers[index].dt', weathers[index].dt);
  const date = new Date(weathers[index].dt * 1000);

  const daysOfWeek = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        let i = 1;
        while (index + i < weathers.length - 1) {
          const date = new Date(weathers[index + i].dt * 1000);
          if (date.getHours() === 0) {
            setIndex(index + i);
            break;
          } else {
            i++;
          }
        }
      } else if (event.deltaY < 0) {
        let i = 1;
        let isMoved = false;
        while (index - i > 0) {
          const date = new Date(weathers[index - i].dt * 1000);
          if (date.getHours() === 0) {
            setIndex(index - i);
            isMoved = true;
            break;
          } else {
            i++;
          }
        }
        if (isMoved) {
        } else {
          setIndex(0);
        }
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [index, weathers.length]);

  return (
    <div className="date">
      <div ref={scrollContainerRef} className="date-day-of-week">
        {dayOfWeek}
      </div>
      <div className="date-time">
        {hours}:{minutes}
      </div>
      <div className="date-month-year">
        {month}/{year}
      </div>
    </div>
  );
}
