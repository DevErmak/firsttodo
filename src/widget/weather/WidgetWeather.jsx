import React, { useContext, useEffect } from 'react';
import { WeatherContext } from '../../context/WeatherContext';
import usePosition from '../../hooks/usePosition';
import { getWeathers } from '../../api/weatherApi';

export default function WidgetWeather() {
  const { weathers, setWeathers } = useContext(WeatherContext);
  console.log('!!!!----->', weathers);

  const { coordinates, error } = usePosition();

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  console.log('--------->latitude', coordinates.latitude, coordinates.longitude, error);

  // useEffect(() => {
  //   if (coordinates.lat && coordinates.lon) {
  //     console.log('--------->coordinates.lat, coordinates.lon', coordinates.lat, coordinates.lon);
  //     getWeathers(coordinates.latitude, coordinates.longitude, weathers, setWeathers);
  //   } else {
  //     setWeathers({...weathers, widgetweather : {}});
  //   }
  // }, [coordinates]);

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
