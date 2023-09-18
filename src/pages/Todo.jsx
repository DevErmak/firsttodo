import TodoForm from '../components/TodoForm/TodoForm';
import WidgetWeather from '../widget/weather/WidgetWeather';
import ReactDOM from 'react-dom';

export default function Todo() {
  return (
    <>
      <TodoForm />
      {ReactDOM.createPortal(<WidgetWeather />, document.getElementById('portal'))}
    </>
  );
}
