import { useEffect } from 'react';
import './weather.css';

export default function CurrentWeather({ weathers, nameCity, country, date, setWeathers }) {
  const temp = (weathers.current.main.temp - 273.15).toFixed(2);
  const feels_like = (weathers.current.main.feels_like - 273.15).toFixed(2);

  useEffect(() => {
    setWeathers({ ...weathers, widgetcurrent: { nameCity, country, date, temp, feels_like } });
  }, [weathers]);
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
