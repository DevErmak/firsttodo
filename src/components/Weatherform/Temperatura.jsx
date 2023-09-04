export default function Temperatura({ temp }) {
  return (
    <>
      <div className="temperatura">
        <div className="temp-c">{(temp - 273.15).toFixed(2)} °C</div>
      </div>
    </>
  );
}
