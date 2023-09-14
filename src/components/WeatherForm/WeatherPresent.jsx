// import './weather.css';
import WeatherDetails from './WeatherDetails';
import DateWeather from './DateWeather';
import { useState } from 'react';
import City from './City';

export default function Weather({ weathers, geo, setGeo, useDebounce }) {
  const [nameCity, setNameCity] = useState('');
  const [dataCity, setDataCity] = useState([]);
  const [isSelectCity, setIsSelectCity] = useState(false);
  const [indexCity, setIndexCity] = useState();

  console.log('!!!---->weathers', weathers);

  if (!isSelectCity) {
    return (
      <City
        setGeo={setGeo}
        nameCity={nameCity}
        setNameCity={setNameCity}
        dataCity={dataCity}
        setDataCity={setDataCity}
        setIsSelectCity={setIsSelectCity}
        setIndexCity={setIndexCity}
      />
    );
  } else {
    if (Object.keys(weathers).length !== 0)
      return (
        <>
          <City
            setGeo={setGeo}
            nameCity={nameCity}
            setNameCity={setNameCity}
            dataCity={dataCity}
            setDataCity={setDataCity}
            setIsSelectCity={setIsSelectCity}
            setIndexCity={setIndexCity}
          />
          <DateWeather
            weathers={weathers}
            nameCity={nameCity}
            dataCity={dataCity}
            indexCity={indexCity}
          />
          <div className="weather-details">asd</div>
        </>
      );
  }
}
