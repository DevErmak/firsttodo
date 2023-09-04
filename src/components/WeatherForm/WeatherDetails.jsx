import React, { useState } from 'react';

export default function WeatherDetails({ weather, hideClick }) {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  if (isReadMore) {
    return (
      <div className="read-or-hide-details" onClick={toggleReadMore}>
        ...подробнее
      </div>
    );
  } else {
    return (
      <div className="weather-details" onClick={toggleReadMore}>
        <div className="temp-k">{weather.main.temp.toFixed(2)} °К</div>
        <div className="temp-f">{(1.8 * (weather.main.temp - 273.15) + 32).toFixed(2)} °F</div>
        <div className="main-details">
          {weather.main.feels_like ? (
            <div className="main-feels_like">
              Восприятие температуры человеком: {(weather.main.feels_like - 273.15).toFixed(2)} °C
            </div>
          ) : null}
          {weather.main.pressure ? (
            <div className="main-pressure">
              Атмосферное давление на уровне моря: {weather.main.pressure} ГПа
            </div>
          ) : null}
          {weather.main.humidity ? (
            <div className="main-humidity">Влажность: {weather.main.humidity} %</div>
          ) : null}
        </div>
        <div className="wind">
          {weather.wind.speed ? (
            <div className="wind-speed">Скорость ветра: {weather.wind.speed} метр/сек</div>
          ) : null}
          {weather.wind.deg ? (
            <div className="wind-speed">Направление ветра: {weather.wind.deg} °</div>
          ) : null}
          {weather.wind.gust ? (
            <div className="wind-speed">Порыв ветра: {weather.wind.gust} метр/сек</div>
          ) : null}
        </div>
        <div className="clouds">
          {weather.clouds.all ? (
            <div className="clouds-all">Скорость ветра: {weather.clouds.all}%</div>
          ) : null}
        </div>
        {weather.rain ? (
          <div className="rain">
            {weather.rain['1h'] ? (
              <div className="rain-1h">
                Количество осадков за последний 1 час: {weather.rain['1h']}%
              </div>
            ) : null}
            {weather.rain['3h'] ? (
              <div className="rain-3h">
                Количество осадков за последний 3 часа: {weather.rain['3h']}%
              </div>
            ) : null}
          </div>
        ) : null}
        {weather.snow ? (
          <div className="snow">
            {weather.snow['1h'] ? (
              <div className="snow-1h">Объем снега за последний 1 час: {weather.snow['1h']}%</div>
            ) : null}
            {weather.snow['3h'] ? (
              <div className="snow-3h">Объем снега за последний 3 часа: {weather.snow['3h']}%</div>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}
