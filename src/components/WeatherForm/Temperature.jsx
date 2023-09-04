export default function Temperature({ weather }) {
  console.log('--------->weatherin temp', weather);
  return (
    <div className="temperature">
      <div className="temp-c"> {(weather.main.temp - 273.15).toFixed(2)}°C</div>
    </div>
  );
}
