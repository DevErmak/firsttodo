import usePosition from '../../hooks/usePosition';
import './weather.css';
import WeatherContainer from './WeatherContainer';

export default function WeatherForm() {
  return (
    <>
      <div className="weatherform">
        <WeatherContainer />
      </div>
    </>
  );
}
