import { useEffect, useState } from "react";

const { kakao } = window;

const Map = () => {
  const [coords, setCoords] = useState({ latitude: 0, longitude: 0 });
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;

  const showPosition = (position) => {
    setCoords({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation이 지원되지 않습니다.");
    }
  }, []);
  console.log(coords);

  useEffect(() => {
    if (coords.latitude !== 0 && coords.longitude) {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(coords.latitude, coords.longitude),
        level: 4,
      };
      const map = new kakao.maps.Map(container, options);
    }
  }, []);
  return <div id="map" style={{ widht: "500px", height: "400px" }}></div>;
};

export default Map;
