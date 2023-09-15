import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org',
});

instance.interceptors.request.use(
  async (config) => {
    console.log('inaxiosresponseconfig', config);
    config.url = config.url + '&appid=' + process.env.REACT_APP_WEATHER_API_KEY;
    return config;
  },
  (error) => Promise.reject(error),
);

export async function getDataCity(inputNameCity, setDataCity, setOptionsCity) {
  try {
    const response = await instance.get(`/geo/1.0/direct?q=${inputNameCity}&limit=5`);
    console.log('--------->responsedataCity', response);
    const data = await response.data;
    console.log('--->dataindataCity', data);
    if (Object.keys(data).length > 0) {
      setDataCity(data);
      return data.map((item, i) => ({
        value: i,
        label: item.country,
      }));
    }
    // if (Object.keys(data).length > 0) {
    //   console.log('--->inIfdataindataCity', data);
    //   const options = data.map((item, i) => ({
    //     value: i,
    //     label: item.country,
    //   }));

    //
    //   setOptionsCity(options);
    // } else {
    //   setDataCity([]);
    //   setOptionsCity([]);
    // }
  } catch (error) {
    console.error(error);
  }
}

// export async function getGeo(nameCity, setGeo) {
//   try {
//     const response = await instance.get(`/geo/1.0/direct?q=${nameCity}&limit=5`);
//     console.log('--------->response', response);
//     const data = await response.data;
//     console.log('--->ingeodata', data);
//     if (data.length === 0) {
//       setGeo({});
//     } else {
//       setGeo({
//         lat: data[0].lat,
//         lon: data[0].lon,
//       });
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

export async function getWeathers(lat, lon, dataWeather, setDataWeather) {
  try {
    let response = await instance.get(`data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=40`);
    console.log('--------->responswethere', response);
    const dataForecast = await response.data;
    console.log('-111------>dataweather', dataForecast);
    response = await instance.get(`data/2.5/weather?lat=${lat}&lon=${lon}`);
    console.log('--------->responswethere', response);
    const dataCurrent = await response.data;
    console.log('-!!!!----->dataweather', dataCurrent);
    setDataWeather({ forecast: dataForecast, current: dataCurrent });
    console.log('-333----->dataweather', dataWeather);
  } catch (error) {
    console.error(error);
  }
}

export default instance;
