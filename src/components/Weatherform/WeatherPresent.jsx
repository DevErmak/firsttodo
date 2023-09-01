import React from 'react';

export default function Weather({ weather }) {
  return (
    <>
      <div>Температура {weather.temp} </div>
    </>
  );
}
