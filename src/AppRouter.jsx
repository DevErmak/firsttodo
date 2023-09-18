import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './pages/Todo';
import Weather from './pages/Weather';
import { WeatherContext } from './context/WeatherContext';
import { useState } from 'react';
import Home from './pages/Home';

const AppRouter = () => {
  const [weathers, setWeathers] = useState({});
  return (
    <>
      <WeatherContext.Provider value={{ weathers, setWeathers }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="todo" element={<Todo />} />
            <Route path="weather" element={<Weather />} />
          </Routes>
        </BrowserRouter>
      </WeatherContext.Provider>
    </>
  );
};
export default AppRouter;
