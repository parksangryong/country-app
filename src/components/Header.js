//로고(홈으로), 최고점수(1~3), 시간
import "../css/Header.css";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

function Header() {
  const [time, setTime] = useState("");

  useEffect(() => {
    getTime();

    setTimeout(() => {
      getTime();
    }, 60000);
  }, [time]);

  const getTime = () => {
    setTime(dayjs(new Date()).format("YYYY년 MM월 DD일 / HH시 mm분"));
  };

  if (JSON.parse(localStorage.getItem("game"))) {
    let scorelist = JSON.parse(localStorage.getItem("game"));
    scorelist.sort((a, b) => b - a);
  }

  return (
    <div id="header">
      <div className="logo" onClick={() => (window.location.href = "/")}>
        Country on Earth
      </div>
      <div className="times">{time}</div>
      <div className="top">
        1st. {scorelist[0]} <br /> 2nd. {scorelist[1]} <br /> 3rd.{" "}
        {scorelist[2]}
      </div>
    </div>
  );
}

export default Header;
