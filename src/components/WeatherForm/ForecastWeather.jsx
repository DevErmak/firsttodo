import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';

export default function ForecastWeather({ weathersForecast }) {
  console.log('--------->weathersForecast', weathersForecast);
  let timestampDays = Object.keys(weathersForecast);
  console.log('--------->timestampDay', timestampDays);
  const [activeSlide, setActiveSlide] = useState(0);
  const handleFirstSwiperSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };
  return (
    <div className="forecast-weathers">
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        mousewheel={true}
        modules={[Mousewheel]}
        className="my-swiper-date"
        onSlideChange={handleFirstSwiperSlideChange}
      >
        {timestampDays.map((timestampDay) => (
          <SwiperSlide key={timestampDay.id}>{weathersForecast[timestampDay].nameDay}</SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        watchSlidesProgress={true}
        mousewheel={true}
        slidesPerView={3}
        modules={[Mousewheel]}
        className="my-swiper-temp"
      >
        {weathersForecast[timestampDays[activeSlide]].temp.map((temp, i) => (
          <SwiperSlide>
            <div className="data-temp">
              <div>{weathersForecast[timestampDays[activeSlide]].timestamp[i]}</div>
              <div className="forecast-temp">{(temp - 273.15).toFixed(2)}°C</div>
              <div className="forecast-feels-like">
                ощущается как:
                {(weathersForecast[timestampDays[activeSlide]].feels_like[i] - 273.15).toFixed(2)}°C
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
