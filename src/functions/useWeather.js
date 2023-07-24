import axios from "axios";
import { useEffect, useState } from "react";
import { getBackground } from "./getBackground";
import { useGeolocation } from "./useGeolocation";

export const useWeather = () => {
  const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

  const [weather, setWeather] = useState(null);
  const [weatherClass, setWeatherClass] = useState("Background");
  const { latitude: lat, longitude: lon } = useGeolocation();

  useEffect(() => {
    // axios로 서버에 원하는 결과 Get 요청
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
      .then((res) => {
        const weatherMain = res.data.weather.map((item) => item.main);
        setWeather(weatherMain);
        setWeatherClass(getBackground(weatherMain));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return { weather, weatherClass };
};
