import './weather.css';
import WeatherDetails from './WeatherDetails';
import Temperature from './Temperature';
import DateWeather from './DateWeather';
import { useState } from 'react';

export default function Weather({ weathers, city }) {
  console.log('---------> in Weatherpresent weather', weathers.list[0].main.temp);
  const [index, setIndex] = useState(0);
  console.log('---------> in Weatherpresent weather', index);

  console.log('--------->dataweathercity', city);
  if (city === undefined) {
    return <div className="not-found-city">Город не найден</div>;
  }
  return (
    <>
      <div className="name-city"> {city} </div>
      <div className="temperature-date">
        <Temperature weathers={weathers.list} index={index} setIndex={setIndex} />
        <DateWeather
          weathers={weathers.list}
          index={index}
          setIndex={setIndex}
          timezone={weathers.city.timezone}
        />
      </div>
      {/* <WeatherDetails weather={weather} /> */}
    </>
  );
}
