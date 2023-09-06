import React, { useEffect, useRef, useState } from 'react';
import './weather.css';

export default function City({ city, setCity, useDebounce }) {
  const [editing, setEditing] = useState(false);
  const [inputCity, setInputCity] = useState();

  const inputRef = useRef(null);

  const debouncedSearchTerm = useDebounce(inputCity, 800);

  const handleClick = () => {
    setEditing(true);
  };

  const handleBlur = () => {
    setEditing(false);
  };

  useEffect(() => {
    console.log('Debounced value:', debouncedSearchTerm);
    setCity(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div className="city">
      {editing ? (
        <input
          autoFocus
          ref={inputRef}
          type="text"
          onChange={(e) => setInputCity(e.target.value)}
          onBlur={handleBlur}
        />
      ) : (
        <div onClick={handleClick} className="name-city">
          {city ? city : 'введите город'}
        </div>
      )}
    </div>
  );
}
