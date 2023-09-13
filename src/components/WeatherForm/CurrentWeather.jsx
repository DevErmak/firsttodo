import { useEffect, useRef, useState } from 'react';
import './weather.css';

export default function CurrentWeather({ weathers, nameCity, country, date }) {
  return (
    <div className="current-weather">
      <div className="current-temp">{(weathers.current.main.temp - 273.15).toFixed(2)} °C</div>
      <div className="feels-like">
        ощущается как: {(weathers.current.main.feels_like - 273.15).toFixed(2)} °C
      </div>
      <div className="name-city">
        {nameCity}, {country} {date}
      </div>
    </div>
  );
}
