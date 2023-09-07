import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeForm() {
  return (
    <div>
      <h1>Домашняя страница</h1>
      <Link to="/weather">
        <button>Перейти на страницу погоды</button>
      </Link>
      <Link to="/todo">
        <button>Перейти на страницу todo</button>
      </Link>
    </div>
  );
}
