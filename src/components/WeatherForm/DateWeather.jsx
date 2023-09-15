import { useContext, useEffect, useRef } from 'react';
import './weather.css';
import { ru } from 'date-fns/locale';
import { add, addMilliseconds, format, getMinutes } from 'date-fns';
import { getTimezoneOffset, utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';

import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';
import { WeatherContext } from '../../context/WeatherContext';

export default function DateWeather({ nameCity, dataCity, indexCity }) {
  const { weathers, setWeathers } = useContext(WeatherContext);
  const utcDate = utcToZonedTime(new Date(), 'Africa/Dakar');

  console.log('--------->utcDate', utcDate);

  const dateInCity = add(utcDate, {
    seconds: weathers.siteWeather.current.timezone,
  });

  console.log('<<><dateInCity', dateInCity);

  const date = format(dateInCity, 'EEEEEE kk:mm dd MMM', { locale: ru });

  //Принимает на вход список weathers.forecast.list и на выходе массив объектов {timestampDay : {nameDay, temp, feels_like, timestamp}} температура в кельвинах
  const getWeathersForecast = (weathers) => {
    let result = {};
    let temp = [];
    let feels_like = [];
    let timestamp = [];
    console.log('--------->weathers[0].dt', weathers[0].dt);
    let day = format(weathers[0].dt * 1000, 'EEEE dd MMM', { locale: ru });
    let objDayTemp = {};
    let dt = new Date();
    let timestampDay = weathers[0].dt * 1000;
    weathers.map((weather) => {
      dt = new Date(weather.dt * 1000);

      if (dt.getHours() === 0) {
        objDayTemp = {
          nameDay: day,
          temp: temp,
          feels_like: feels_like,
          timestamp: timestamp,
        };
        result[timestampDay] = objDayTemp;
        console.log('--------->result', result);
        temp = [];
        temp.push(weather.main.temp);
        feels_like = [];
        feels_like.push(weather.main.feels_like);
        timestamp = [];
        timestamp.push(format(dt, 'HH:mm', { locale: ru }));
        day = format(dt, 'EEEE dd MMM', { locale: ru });
        timestampDay = weather.dt * 1000;
      } else {
        temp.push(weather.main.temp);
        feels_like.push(weather.main.feels_like);
        timestamp.push(format(dt, 'HH:mm', { locale: ru }));
      }
    });
    return result;
  };
  const weathersForecast = getWeathersForecast(weathers.siteWeather.forecast.list);

  return (
    <div className="temperature-date">
      <CurrentWeather nameCity={nameCity} country={dataCity[indexCity].country} date={date} />
      <ForecastWeather weathersForecast={weathersForecast} />
    </div>
  );
}
