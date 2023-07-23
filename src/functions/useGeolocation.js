import { useEffect, useState } from "react";

export const useGeolocation = () => {
  const [coords, setCoords] = useState({ latitude: 0, longitude: 0 });

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

  return coords;
};
