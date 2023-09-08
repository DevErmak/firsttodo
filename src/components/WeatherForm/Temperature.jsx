import { useEffect, useRef, useState } from 'react';
import './weather.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';

export default function Temperature({ weathers, setIndex, index }) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      console.log('Прокрутка элемента div произошла!');

      if (event.deltaX > 0 && index < weathers.length - 1) {
        console.log('--------->up');
        setIndex((prevIndex) => {
          const currentDate = new Date(weathers[prevIndex].dt * 1000);
          if (currentDate.getHours() === 21) {
            return prevIndex;
          } else return prevIndex + 1;
        });
      } else if (event.deltaX < 0 && index > 0) {
        setIndex((prevIndex) => {
          const currentDate = new Date(weathers[prevIndex].dt * 1000);
          if (currentDate.getHours() === 0) {
            return prevIndex;
          } else return prevIndex - 1;
        });
      }
    };
    const scrollContainer = scrollContainerRef.current;

    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [index, weathers.length]);

  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
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
      {/* <div className="temperature">
        <div
          ref={scrollContainerRef}
          style={{ width: '300px', overflowX: 'scroll', whiteSpace: 'nowrap' }}
        >
          <div style={{ display: 'inline-block', width: '500px' }}>
            Содержимое элемента div с горизонтальной прокруткой
          </div>
        </div>
        <div className="temp-c" ref={scrollContainerRef}>
          {(weathers[index].main.temp - 273.15).toFixed(2)}
          °Crhjbfghjkerbvhkgygatvygvrereffffffffffffffffffffffffffffffffffffff
          {(weathers[index].main.temp - 273.15).toFixed(2)}
          ffffffffffffffffffffffffgggggggggggggggggggfggggggggggggggggggggggggggggggggggggggggggggggggffffffffffffffffffffggggggggggggggggggffgfgffffffffffffffffffffffffffffffffffffggggggggggggggggggggggggggggggehyrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrhgerfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffggggggggggggggggfffffffffffffffggggggggggggggggggggggehrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrgherfffffffffffffffffffffffffffffffffffhqfejurryueqgfh
        </div>
      </div> */}
    </>
  );
}
