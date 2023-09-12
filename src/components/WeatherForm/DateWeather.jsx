import { useEffect, useRef } from 'react';
import './weather.css';
import { ru } from 'date-fns/locale';
import { add, addMilliseconds, format, getMinutes } from 'date-fns';
import { getTimezoneOffset, utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';

import Temperature from './Temperature';

export default function DateWeather({ weathers, nameCity, dataCity, indexCity }) {
  // { weathers, setIndex, index, timezone }

  const utcDate = utcToZonedTime(new Date(), 'Africa/Dakar');

  console.log('--------->utcDate', utcDate);

  const dateInCity = add(utcDate, {
    seconds: weathers.current.timezone,
  });

  console.log('<<><dateInCity', dateInCity);

  const date = format(dateInCity, 'EEEEEE kk:mm dd MMM', { locale: ru });

  // const dayWeek = weathers.forecast.list.filter((weather, i) => {
  //   const dt = new Date(weather.dt * 1000);
  //   let dataForecast={};

  //   if (dt.getHours() === 0) {
  //     return i;
  //   }
  // });

  // const tempInDay = (dayWeek)=>{

  //   let i=0;
  //   let tempInDay = [];
  //   if(dayWeek[0]>0){
  //     while(i < dayWeek[0])
  //     tempInDay.push({temp: weathers.forecast.list[i].})
  //   }

  // }

  // const getWeathersForecast = (weathers) => {
  //   weathers.map((weather) => {
  //     const dt = new Date(weather.dt * 1000);
  //     name
  //     if (dt.getHours() === 0) {
  //     }
  //   });
  // };

  // const greenwichTime = utcToZonedTime(new Date(), 'Europe/Greenwich');
  // console.log('<<<', greenwichTime);
  // const GetDateRelativeCurrentСity = (timeDtSec) => {
  //   const currentDate = new Date(timeDtSec * 1000);
  //   const dateUTC = new Date(
  //     currentDate.getUTCFullYear(),
  //     currentDate.getUTCMonth(),
  //     currentDate.getUTCDay(),
  //     currentDate.getUTCHours(),
  //     currentDate.getUTCMinutes(),
  //     currentDate.getUTCSeconds(),
  //     currentDate.getUTCMilliseconds(),
  //   );
  //   return dateUTC.getTime() + timezone * 1000;
  // };
  // console.log('--------->weathers[index].dt', weathers[index].dt);
  // const date = new Date(weathers[index].dt * 1000);

  // const daysOfWeek = [
  //   'Воскресенье',
  //   'Понедельник',
  //   'Вторник',
  //   'Среда',
  //   'Четверг',
  //   'Пятница',
  //   'Суббота',
  // ];
  // const dayOfWeek = daysOfWeek[date.getDay()];
  // const hours = date.getHours().toString().padStart(2, '0');
  // const minutes = date.getMinutes().toString().padStart(2, '0');
  // const month = (date.getMonth() + 1).toString().padStart(2, '0');
  // const year = date.getFullYear();

  // const scrollContainerRef = useRef(null);

  // useEffect(() => {
  //   const scrollContainer = scrollContainerRef.current;
  //   const handleScroll = (event) => {
  //     if (event.deltaY > 0) {
  //       let i = 1;
  //       while (index + i < weathers.length - 1) {
  //         const date = new Date(weathers[index + i].dt * 1000);
  //         if (date.getHours() === 0) {
  //           setIndex(index + i);
  //           break;
  //         } else {
  //           i++;
  //         }
  //       }
  //     } else if (event.deltaY < 0) {
  //       let i = 1;
  //       let isMoved = false;
  //       while (index - i > 0) {
  //         const date = new Date(weathers[index - i].dt * 1000);
  //         if (date.getHours() === 0) {
  //           setIndex(index - i);
  //           isMoved = true;
  //           break;
  //         } else {
  //           i++;
  //         }
  //       }
  //       if (isMoved) {
  //       } else {
  //         setIndex(0);
  //       }
  //     }
  //   };

  //   scrollContainer.addEventListener('scroll', handleScroll);

  //   return () => {
  //     scrollContainer.removeEventListener('scroll', handleScroll);
  //   };
  // }, [index, weathers.length]);
  return (
    // <div className="date">
    //   <div ref={scrollContainerRef} className="date-day-of-week">
    //     {dayOfWeek}
    //   </div>
    //   <div className="date-time">
    //     {hours}:{minutes}
    //   </div>
    //   <div className="date-month-year">
    //     {month}/{year}
    //   </div>
    // </div>
    <div className="temperature-date">
      <div className="current-weather">
        <div>{(weathers.current.main.temp - 273.15).toFixed(2)} °C</div>
        <div className="feels-like">
          ощущается как: {(weathers.current.main.feels_like - 273.15).toFixed(2)} °C
        </div>
        <div className="name-city">
          {nameCity}, {dataCity[indexCity].country} {date}
        </div>
      </div>
      <div className="forecast-date">
        <div>
          <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="forecast-temperature">
        <Temperature />
      </div>
    </div>
  );
}
