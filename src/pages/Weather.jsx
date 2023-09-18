import WeatherForm from '../components/WeatherForm/WeatherForm';
import WidgetWeather from '../widget/weather/WidgetWeather';
import ReactDOM from 'react-dom';

export default function Weather() {
  return (
    <>
      <WeatherForm />
      {ReactDOM.createPortal(<WidgetWeather />, document.getElementById('portal'))}
    </>
  );
}
