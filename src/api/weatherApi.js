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
axios.interceptors.response.use(
  async (response) => {
    console.log('inaxiosresponse', response);
    return response;
  },
  (error) => Promise.reject(error),
);
export async function getGeo(nameCity, setGeo, setCity) {
  try {
    const response = await instance.get(`/geo/1.0/direct?q=${nameCity}&limit=5`);
    console.log('--------->response', response);
    const data = await response.data;
    console.log('--->ingeodata', data);
    if (data.length === 0) {
      setGeo({});
    } else {
      setGeo({
        lat: data[0].lat,
        lon: data[0].lon,
      });
    }
  } catch (error) {
    setCity(undefined);
    console.log('in error axisos nameCity', nameCity);
    console.error(error);
  }
}

export async function getWeather(lat, lon, setWeather) {
  try {
    const response = await instance.get(`data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=40`);
    console.log('--------->responswethere', response);
    const data = await response.data;
    console.log('--------->dataweather', data);
    setWeather(data);
  } catch (error) {
    console.error(error);
  }
}

export default instance;
