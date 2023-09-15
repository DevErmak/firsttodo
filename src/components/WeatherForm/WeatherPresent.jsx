// import './weather.css';
import WeatherDetails from './WeatherDetails';
import DateWeather from './DateWeather';
import { useContext, useState } from 'react';
import City from './City';
import { WeatherContext } from '../../context/WeatherContext';

export default function Weather({ geo, setGeo, useDebounce }) {
  const [nameCity, setNameCity] = useState('');
  const [dataCity, setDataCity] = useState([]);
  const [isSelectCity, setIsSelectCity] = useState(false);
  const [indexCity, setIndexCity] = useState();
  const { weathers, setWeathers } = useContext(WeatherContext);

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
    console.log('!!!------>weathers', weathers);
    if (Object.keys(weathers.siteWeather).length !== 0)
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
          <DateWeather nameCity={nameCity} dataCity={dataCity} indexCity={indexCity} />
        </>
      );
  }
}
