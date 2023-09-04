import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './pages/Todo';
import Weather from './pages/Weather';
import { WeatherContext } from './context/WeatherContext';
import { useState } from 'react';

const AppRouter = () => {
  const [weather, setWeather] = useState([]);
  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      <BrowserRouter>
        <Routes>
          <Route path="todo" element={<Todo />} />
          <Route path="weather" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </WeatherContext.Provider>
  );
};
export default AppRouter;
