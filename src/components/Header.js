import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";
import { Link } from 'react-router-dom';
import axios from "axios";
import { getBackground } from "../functions/getBackground";

const Header = ({ weather }) => {
  // 현재 시간을 보여줄 상태 변수 선언
  const [currentTime, setCurrentTime] = useState("");
  // 현재 날씨를 받아올 상태 변수 선언

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

  return (
    <header>
      <Container fluid>
        <Row>
          <Col>
            <span id="text-left">날씨 : {weather || "로딩 중..."}</span>
          </Col>
          <Col sm={1}>
            <Link to="/">
              <img id="LogoImg" src="/images/HeaderLogo.png" alt="로고" />
            </Link>
          </Col>
          <Col sm="auto">
            <Link to="/">
              <h1>오늘 뭐 먹지</h1>
            </Link>
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
