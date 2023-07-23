import axios from "axios";
import { useEffect, useState } from "react";
import { useGeolocation } from "./useGeolocation";

/* 좌표 이용해서 주소 받아오기 */
export const useAddress = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const [address, setAddress] = useState(null);
  const coords = useGeolocation();
  // console.log(address.documents[0].address.region_3depth_name);

  useEffect(() => {
    if (coords.longitude !== 0 || coords.latitude !== 0) {
      axios
        .get(
          `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${coords.longitude}&y=${coords.latitude}`,
          {
            headers: {
              Authorization: `KakaoAK ${REST_API_KEY}`,
            },
          },
        )
        .then((res) => {
          if (res.data?.documents && res.data.documents.length > 0) {
            setAddress(res.data);
          } else {
            setAddress(null);
          }
        })
        .catch((error) => {
          console.log(error);
          setAddress(null);
        });
    }
  }, [coords, REST_API_KEY]);

  if (address && address.documents && address.documents.length > 0) {
    return address.documents[0].address.region_3depth_name;
  }
  return null;
};
