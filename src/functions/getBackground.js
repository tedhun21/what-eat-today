export const getBackground = () => {
  // 시간대에 따라 Background 클래스를 지정하는 함수

  const now = new Date();
  const hours = now.getHours();

  if (hours >= 6 && hours < 14) {
    // 오전 6시부터 오후 2시까지의 Background 클래스
    return "Background-morning";
  } else if (hours >= 14 && hours < 22) {
    // 오후 2시부터 10시까지의 Background 클래스
    return "Background";
  } else {
    return "Background-night"; // 오후 10시부터 6시까지의 Background 클래스
  }
};
