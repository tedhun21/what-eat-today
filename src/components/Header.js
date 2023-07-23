import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";
import axios from "axios";

const Header = () => {
  // 현재 시간을 보여줄 상태 변수 선언
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // 1초마다 현재 시간 업데이트
    const interval = setInterval(() => {
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const time = hour >= 12 ? "오후" : "오전";
      const guideWord = `${time} ${hour % 12 === 0 ? 12 : hour % 12}시 ${minute}분`;
      setCurrentTime(guideWord);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 현재 날씨를 받아올 상채 변수 선언
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // OpenWeather APT로 날씨 받아오기
    const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
    const city = "seoul";

    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=kr`
    )
      .then(res => console.log(res.data.weather))
  })

  return (
    <header>
      <Container fluid>
        <Row>
          <Col>
            <span id="text-left">날씨 : 비</span>
          </Col>
          <Col sm={1}>
            <img id="LogoImg" src="/images/HeaderLogo.png" alt="로고" />
          </Col>
          <Col sm="auto">
            <h1>오늘 뭐 먹지</h1>
          </Col>
          <Col>
            <span id="text-right">현재시간 : {currentTime}</span>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
