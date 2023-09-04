import './weather.css';
import WeatherDetails from './WeatherDetails';
import Temperature from './Temperature';
import DateWeather from './DateWeather';

export default function Weather({ weather, city }) {
  console.log('---------> in Weatherpresent weather', weather.main.temp);
  // debugger;
  console.log('--------->dataweathercity', city);
  if (city === undefined) {
    return <div className="not-found-city">Город не найден</div>;
  }
  return (
    <>
      <div className="name-city"> {city} </div>
      <div className="temperature-date">
        {/* {weather && (
          <> */}
        <Temperature temp={weather} />
        <DateWeather weather={weather} />
        {/* </>
        )} */}
      </div>
      {/* <WeatherDetails weather={weather} /> */}
    </>
  );
}
