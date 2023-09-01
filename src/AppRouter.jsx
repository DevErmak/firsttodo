import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './pages/Todo';
import Weather from './pages/Weather';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="todo" element={<Todo />} />
      <Route path="weather" element={<Weather />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
