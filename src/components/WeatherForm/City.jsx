import React, { useEffect, useRef, useState } from 'react';
import './weather.css';
// import Select from 'react-select';
import { getDataCity } from '../../api/weatherApi';
import AsyncSelect from 'react-select/async';

export default function City({ geo, setGeo, useDebounce }) {
  const [editing, setEditing] = useState(false);
  // const [inputCity, setInputCity] = useState('');
  const [dataCity, setDataCity] = useState([]);
  const [nameCity, setNameCity] = useState('');
  const [optionsCity, setOptionsCity] = useState([]);
  console.log('--------->OptionsCity', optionsCity);

  // console.log('--------->inputCity', inputCity);

  // const inputRef = useRef(null);

  // const debouncedSearchTerm = useDebounce(inputCity, 8);
  // console.log('--------->debouncedSearchTerm', debouncedSearchTerm);

  const handleClick = () => {
    setEditing(true);
  };

  const handleBlur = () => {
    setEditing(false);
  };

  // const handleInputChange = (inputCity) => {
  //   console.log('--------->inhandleonInputChangeinputCity', inputCity);
  //   setInputCity(inputCity);
  // };

  // useEffect(() => {
  //   console.log('Debounced value:', debouncedSearchTerm);
  //   getDataCity(debouncedSearchTerm, setDataCity, setOptionsCity);
  // }, [debouncedSearchTerm]);
  console.log('--------->datawdasdawfafsaCity', dataCity);

  const handleChange = (indexCity) => {
    console.log('indexCity', indexCity);
    console.log('--------->inhandlechangedataCity', dataCity);
    console.log('dataCityin geo', dataCity[indexCity.value]);
    setGeo({
      lat: dataCity[indexCity.value].lat,
      lon: dataCity[indexCity.value].lon,
    });
  };

  console.log('--------->datacity', dataCity);
  // const loadOptions = (inputValue, callback) => {
  //   setInputCity(inputValue);
  //   console.log('--------->loadOptionsinputValue', inputValue);
  //   debugger;
  //   callback(getDataCity(inputValue, setDataCity, setOptionsCity));
  // };

  // const filterColors = (inputValue: string) => {
  //   return colourOptions.filter((i) =>
  //     i.label.toLowerCase().includes(inputValue.toLowerCase())
  //   );
  // };

  let timerId;

  const promiseOptions = (inputValue) => {
    return new Promise((resolve, reject) => {
      clearTimeout(timerId);
      timerId = setTimeout(async () => {
        try {
          setNameCity(inputValue);
          const results = await getDataCity(inputValue, setDataCity, setOptionsCity);
          resolve(results);
        } catch (error) {
          reject(error);
        }
      }, 1000);
    });
  };

  // const promiseOptions = (inputValue) => {
  // setInputCity(inputValue);
  // console.log('>debouncedSearchTerm', debouncedSearchTerm);
  // if (debouncedSearchTerm !== '') {
  //   console.log('>inifdebouncedSearchTerm', debouncedSearchTerm);
  //   getDataCity(debouncedSearchTerm, setDataCity, setOptionsCity);
  // }
  // new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(getDataCity(debouncedSearchTerm, setDataCity, setOptionsCity));
  //   }, 1000);
  // });
  // };
  return (
    <div className="city">
      {editing ? (
        <AsyncSelect
          autoFocus
          // ref={inputRef}
          // type="text"
          onChange={handleChange}
          // options={optionsCity}
          // onInputChange={handleInputChange}
          onBlur={handleBlur}
          loadOptions={promiseOptions}
          value={nameCity}
        />
      ) : (
        <div onClick={handleClick} className="name-city">
          {nameCity !== '' ? nameCity : 'введите город'}
        </div>
      )}
    </div>
  );
}
