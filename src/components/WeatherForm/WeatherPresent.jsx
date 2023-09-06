import './weather.css';
import WeatherDetails from './WeatherDetails';
import Temperature from './Temperature';
import DateWeather from './DateWeather';
import { useState } from 'react';
import City from './City';

export default function Weather({ weathers, city, setCity, useDebounce }) {
  // console.log('---------> in Weatherpresent weather', weathers.list[0].main.temp);
  const [index, setIndex] = useState(0);
  console.log('---------> in Weatherpresent weather', index);

  console.log('--------->dataweathercityinpresent', city);
  if (Object.keys(weathers).length < 1) {
    return (
      <>
        <City city={city} useDebounce={useDebounce} setCity={setCity} />
        <div className="not-found-city">Город не найден</div>
      </>
    );
  }
  return (
    <>
      <City city={city} useDebounce={useDebounce} setCity={setCity} />
      <div className="temperature-date">
        <Temperature weathers={weathers.list} index={index} setIndex={setIndex} />
        <DateWeather
          weathers={weathers.list}
          index={index}
          setIndex={setIndex}
          timezone={weathers.city.timezone}
        />
        {console.log('--------->weathers.list[index]', weathers.list[index])}
      </div>
      <WeatherDetails weather={weathers.list[index]} />
    </>
  );
}
