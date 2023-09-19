import React, { useContext, useEffect, useState } from 'react';
import { WeatherContext } from '../../context/WeatherContext';
import usePosition from '../../hooks/usePosition';
import { getWeathers } from '../../api/weatherApi';
import './widget-weather.css';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi';
import { GrUpdate } from 'react-icons/gr';

export default function WidgetWeather() {
  const [isActive, setIsActive] = useState(false);
  const { weathers, setWeathers } = useContext(WeatherContext);
  const { coordinates, error } = usePosition();

  const [dataWeather, setDataWeather] = useState({});

  useEffect(() => {
    if (coordinates.latitude && coordinates.longitude) {
      getWeathers(coordinates.latitude, coordinates.longitude, dataWeather, setDataWeather);
    } else {
      setWeathers((prevState) => ({ ...prevState, widgetweather: {} }));
    }
  }, [coordinates]);

  const date = format(new Date(), 'EEEEEE kk:mm dd MMM', { locale: ru });

  useEffect(() => {
    setWeathers((prevState) => ({ ...prevState, widgetweather: dataWeather }));
  }, [dataWeather]);

  const handleToggleActive = () => {
    setIsActive(!isActive);
  };

  const handleUpdateWeather = () => {
    setWeathers((prevState) => ({ ...prevState, widgetweather: dataWeather }));
  };

  if (Object.keys(weathers).length !== 0 && Object.keys(weathers.widgetweather).length !== 0) {
    const temp = (weathers.widgetweather.current.main.temp - 273.15).toFixed(2);
    const feels_like = (weathers.widgetweather.current.main.feels_like - 273.15).toFixed(2);
    return (
      <div className="widget-weather">
        <div className={isActive ? 'arrow' : 'arrow-expanded'} onClick={handleToggleActive}>
          <BiArrowFromLeft size={25} color="blue" />
        </div>
        <div className={isActive ? 'data-widget-weather' : 'data-widget-weather-expanded'}>
          <div className="widget-temp">
            {temp} °C
            <div onClick={handleUpdateWeather}>
              <GrUpdate color="blue" />
            </div>
          </div>
          <div className="widget-feels_like">ощущается как: {feels_like} °C</div>
          <div>
            {weathers.widgetweather.current.name}, {weathers.widgetweather.current.sys.country}{' '}
            {date}
          </div>
        </div>
      </div>
    );
  }
}
