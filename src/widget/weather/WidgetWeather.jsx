import React, { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';

export default function WidgetWeather() {
  const { weathers, setWeathers } = useContext(WeatherContext);
  console.log('!!!!----->', weathers);

  return (
    <div>
      <div>{weathers.widgetcurrent.temp} °C</div>
      <div>ощущается как: {weathers.widgetcurrent.feels_like} °C</div>
      <div>
        {weathers.widgetcurrent.nameCity}, {weathers.widgetcurrent.country}{' '}
        {weathers.widgetcurrent.date}
      </div>
    </div>
  );
}
