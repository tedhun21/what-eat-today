<br>

## **Project. What eat today**
<img width="200px" src= "public/images/WhatEatToday.png" />

>**[코드스테이츠 FE 45기] 스터디_참숯가마** <br>
>**개발기간 : 2023.7.17 ~ 2023.08.5**

<br>

## 프로젝트팀 소개
|<center>윤 예빈</center>|<center>송 지훈</center>|
|---|---|
|<img width="150px" height="150px" src = "public/images/Yebin.jpg">|<img width="150px" height="150px" src = "public/images/Jihun.png">|
|<center>[@YebinYun](https://github.com/YebinYun)</center>|<center>[@tedhun21](https://github.com/tedhun21)</center>|
<br>

## 프로젝트 소개
<img width="750px" src="public/images/WhatEatToday-Movie.gif" />

## 주요 기능
### 추천 받고 싶은 메뉴를 보기를 통해 고르도록 구현
- 🍚 원하는 항목을 보기를 통해 클릭하여 메뉴선택 가능
- 🍚 여러가지 메뉴를 보여줌
  - 🍙 해당 결과를 URL로 연결되도록 구현

### 사용자에 위치를 받아와 추천 받은 식당 추천
- 🍚 최종 선택된 음식을 기준으로 식당 추천
- 🍚 추천 받은 음식을 사용자에 위치를 기반으로 주변 식당 안내

### 상단에 오늘의 날씨와 시간 제공
- 🍚 시간에 따라 음식을 참고 가능하도록 구현
- 🍚 또한, 날씨에 따라 음식을 참고 가능하도록 구현

<br>

## **Stack**
### **Environment**
<img src="https://img.shields.io/badge/visual studio code-007ACC?style=flat&logo=visualstudiocode&logoColor=white"/> <img src="https://img.shields.io/badge/git-F05032?style=flat&logo=git&logoColor=white"/> <img src="https://img.shields.io/badge/git hub-181717?style=flat&logo=github&logoColor=white"/>

### **Config**
<img src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white"/> <img src="https://img.shields.io/badge/kakaomap-FFCD00?style=flat&logo=kakao&logoColor=white"/>

### **Development**
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/react router-CA4245?style=flat&logo=reactrouter&logoColor=white"/> <img src="https://img.shields.io/badge/bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white"/> <img src="https://img.shields.io/badge/axios-5A29E4?style=flat&logo=axios&logoColor=white"/> 

<br>

## 아키텍쳐
### 디렉토리 구조

```

├── package-lock.json
├── package.json
├── public
└── src
    ├── App.css
    ├── App.js
    ├── components
    │   ├── Header.js
    │   ├── Map.css
    │   └── Map.js
    ├── data
    │   └── Data.js
    ├── font
    │   ├── AnyConv.comSDSamliphopangcheTTFBasic.woff
    │   ├── AnyConv.comSDSamliphopangcheTTFOutline.woff
    │   └── Font.css
    ├── functions
    │   ├── getBackground.js
    │   ├── useAddress.js
    │   ├── useGeolocation.js
    │   └── useWeather.js
    ├── index.css
    ├── index.js
    └── pages
        ├── Decided.js
        ├── DecidedResult.js
        ├── Result.js
        └── Start.js

```      

<br>

### User Flow
<img width="750px" src="public/images/User Flow.png"/>