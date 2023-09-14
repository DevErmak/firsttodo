import React, { useEffect, useRef, useState } from 'react';
import './weather.css';
import { getDataCity } from '../../api/weatherApi';
import AsyncSelect from 'react-select/async';
import { TbCloudSearch } from 'react-icons/tb';

export default function City({
  setGeo,
  nameCity,
  setNameCity,
  dataCity,
  setDataCity,
  setIsSelectCity,
  setIndexCity,
}) {
  const [inputCity, setInputCity] = useState('');
  const [optionsCity, setOptionsCity] = useState([]);
  console.log('--------->OptionsCity', optionsCity);

  console.log('--------->datawdasdawfafsaCity', dataCity);

  const handleChange = (indexCity) => {
    console.log('indexCity', indexCity);
    console.log('--------->inhandlechangedataCity', dataCity);
    console.log('dataCityin geo', dataCity[indexCity.value]);
    setIndexCity(indexCity.value);
    setIsSelectCity(true);
    setNameCity(inputCity);
    setGeo({
      lat: dataCity[indexCity.value].lat,
      lon: dataCity[indexCity.value].lon,
    });
  };

  console.log('--------->datacity', dataCity);

  let timerId;

  const promiseOptions = (inputValue) => {
    setIsSelectCity(false);
    return new Promise((resolve, reject) => {
      clearTimeout(timerId);
      timerId = setTimeout(async () => {
        try {
          setInputCity(inputValue);
          const results = await getDataCity(inputValue, setDataCity, setOptionsCity);
          resolve(results);
        } catch (error) {
          reject(error);
        }
      }, 1000);
    });
  };

  const customIcon = (props) => (
    <div>
      <TbCloudSearch color="white" />
    </div>
  );

  return (
    <div className="city">
      <AsyncSelect
        classNamePrefix="custom-select-weather"
        onChange={handleChange}
        components={{ DropdownIndicator: customIcon }}
        placeholder="Введите название города"
        loadOptions={promiseOptions}
        value={nameCity}
      />
    </div>
  );
}
