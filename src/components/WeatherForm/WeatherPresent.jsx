import './weather.css';
import WeatherDetails from './WeatherDetails';
import Temperature from './Temperature';
import DateWeather from './DateWeather';
export default function Weather({ weather, city }) {
  console.log('--------->dataweathercity', city);
  if (city === undefined) {
    return <div className="not-found-city">Город не найден</div>;
  }
  return (
    <>
      <div className="name-city"> {city} </div>
      <div>
        <Temperature temp={weather.main.temp} />
        <DateWeather weather={weather} />
      </div>
      <WeatherDetails weather={weather} />
    </>
  );
}
