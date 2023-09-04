export default function DateWeather({ weather }) {
  const currentDate = new Date();
  const dateUTC = new Date(
    currentDate.getUTCFullYear(),
    currentDate.getUTCMonth(),
    currentDate.getUTCDay(),
    currentDate.getUTCHours(),
    currentDate.getUTCMinutes(),
    currentDate.getUTCSeconds(),
    currentDate.getUTCMilliseconds(),
  );

  const timestamp = dateUTC.getTime() + weather.timezone * 1000;
  const date = new Date(timestamp);
  console.log('--------->data.get', date.getHours);

  const daysOfWeek = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return (
    <div className="date">
      <div className="date-day-of-week">{dayOfWeek}</div>
      <div className="date-time">
        {hours}:{minutes}
      </div>
      <div className="date-month-year">
        {month}/{year}
      </div>
    </div>
  );
}
