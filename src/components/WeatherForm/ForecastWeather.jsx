import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';

// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';
// import { Mousewheel, Pagination } from 'swiper/modules';
//  <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
//         {weathersForecast.map((weather) => (
//           <SwiperSlide key={weather.id}>
//             <div className="forecast-nameday">{weather.nameDay}</div>
//             <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
//               <SwiperSlide>asd</SwiperSlide>
//               <SwiperSlide>123asd</SwiperSlide>
//               <SwiperSlide>532asd</SwiperSlide>
//               <SwiperSlide>312asd</SwiperSlide>
//             </Swiper>
//           </SwiperSlide>
//         ))}
//       </Swiper>
export default function ForecastWeather({ weathersForecast }) {
  console.log('--------->weathersForecast', weathersForecast);
  return (
    <div className="forecast-weathers">
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={1}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        {weathersForecast.map((weather) => (
          <SwiperSlide key={weather.id}>
            {weather.nameDay}
            <Swiper
              watchSlidesProgress={true}
              mousewheel={true}
              slidesPerView={3}
              modules={[Mousewheel, Pagination]}
              className="myTemp"
            >
              {weather.temp.map((temp, i) => (
                <SwiperSlide>
                  <div className="data-temp">
                    <div>{weather.timestamp[i]}</div>
                    <div className="forecast-temp">{(temp - 273.15).toFixed(2)}°C</div>
                    <div className="forecast-feels-like">
                      ощущается как:{(weather.feels_like[i] - 273.15).toFixed(2)} °C
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
        <SwiperSlide>
          <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
    </div>
  );
}
