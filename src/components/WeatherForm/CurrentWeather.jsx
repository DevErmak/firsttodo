import { useContext, useEffect } from 'react';
import './weather.css';
import { WeatherContext } from '../../context/WeatherContext';

export default function CurrentWeather({ nameCity, country, date }) {
  const { weathers, setWeathers } = useContext(WeatherContext);

  const temp = (weathers.siteWeather.current.main.temp - 273.15).toFixed(2);
  const feels_like = (weathers.siteWeather.current.main.feels_like - 273.15).toFixed(2);

  return (
    <div className="current-weather">
      <div className="current-temp">{temp} °C</div>
      <div className="feels-like">ощущается как: {feels_like} °C</div>
      <div className="name-city">
        {nameCity}, {country} {date}
      </div>
    </div>
  );
}
