// import './weather.css';
import WeatherDetails from './WeatherDetails';
import DateWeather from './DateWeather';
import { useState } from 'react';
import City from './City';

export default function Weather({ weathers, geo, setGeo, useDebounce }) {
  // console.log('---------> in Weatherpresent weather', weathers.list[0].main.temp);
  // const [index, setIndex] = useState(0);
  // console.log('---------> in Weatherpresent weather', index);

  // if (Object.keys(weathers).length < 1) {
  //   return (
  //     <>
  //       <City geo={geo} useDebounce={useDebounce} setGeo={setGeo} />
  //       <div className="not-found-city">Город не найден</div>
  //     </>
  //   );
  // }
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
          {/* <div className="weather-details">asd</div> */}
          {/* <div className="temperature-date">
        <Temperature weathers={weathers.list} index={index} setIndex={setIndex} />
        <DateWeather
          weathers={weathers.list}
          index={index}
          setIndex={setIndex}
          timezone={weathers.city.timezone}
        />
        {console.log('--------->weathers.list[index]', weathers.list[index])}
      </div> */}
          {/* <WeatherDetails weather={weathers.list[index]} /> */}
        </>
      );
  }
}
