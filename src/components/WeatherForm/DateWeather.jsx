import { useEffect, useRef } from 'react';
import './weather.css';
import { ru } from 'date-fns/locale';
import { add, addMilliseconds, format, getMinutes } from 'date-fns';
import { getTimezoneOffset, utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';

import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';

export default function DateWeather({ weathers, nameCity, dataCity, indexCity }) {
  const utcDate = utcToZonedTime(new Date(), 'Africa/Dakar');

  console.log('--------->utcDate', utcDate);

  const dateInCity = add(utcDate, {
    seconds: weathers.current.timezone,
  });

  console.log('<<><dateInCity', dateInCity);

  const date = format(dateInCity, 'EEEEEE kk:mm dd MMM', { locale: ru });

  //Принимает на вход список weathers.forecast.list и на выходе массив объектов {nameDay, temp, feels_like, timestamp} температура в кельвинах
  const getWeathersForecast = (weathers) => {
    const result = [];
    let temp = [];
    let feels_like = [];
    let timestamp = [];
    console.log('--------->weathers[0].dt', weathers[0].dt);
    let day = format(weathers[0].dt * 1000, 'EEEE dd MMM', { locale: ru });
    let objDayTemp = {};
    let dt = new Date();
    weathers.map((weather) => {
      dt = new Date(weather.dt * 1000);
      if (dt.getHours() === 0) {
        objDayTemp = { nameDay: day, temp: temp, feels_like: feels_like, timestamp: timestamp };
        result.push(objDayTemp);
        temp = [];
        temp.push(weather.main.temp);
        feels_like = [];
        feels_like.push(weather.main.feels_like);
        timestamp = [];
        timestamp.push(format(dt, 'kk:mm', { locale: ru }));
        day = format(dt, 'EEEE dd MMM', { locale: ru });
      } else {
        temp.push(weather.main.temp);
        feels_like.push(weather.main.feels_like);
        timestamp.push(format(dt, 'kk:mm', { locale: ru }));
      }
    });
    return result;
  };
  const weathersForecast = getWeathersForecast(weathers.forecast.list);

  return (
    <div className="temperature-date">
      <CurrentWeather
        weathers={weathers}
        nameCity={nameCity}
        country={dataCity[indexCity].country}
        date={date}
      />
      <ForecastWeather weathersForecast={weathersForecast} />
    </div>
  );
}
