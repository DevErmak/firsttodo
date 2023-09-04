export default function Temperature({ temp }) {
  return (
    <div className="temperature">
      <div className="temp-c">{(temp - 273.15).toFixed(2)} °C</div>
    </div>
  );
}
