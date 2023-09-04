export default function DateWeather({ weather }) {
  const timestamp = weather.dt * 1000;
  console.log('timestamp', timestamp);
  const date = new Date(timestamp);
  console.log('datra', date);

  const daysOfWeek = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
  console.log('gatedatasa', date.getFullYear());

  const dayOfWeek = daysOfWeek[date.getDay()];
  console.log('dateawdadsa', dayOfWeek);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return (
    <>
      <div className="date-dayofweek">{dayOfWeek}</div>
      <div className="date-time">
        {hours}:{minutes}
      </div>
      <div className="date-monthyear">
        {month}/{year}
      </div>
    </>
  );
}
