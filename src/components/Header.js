//로고(홈으로), 최고점수(1~3), 시간
import "../css/Header.css";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

function Header() {
  const [time, setTime] = useState("");
  const [scorelist, setScorelist] = useState([20, 10, 0]);

  useEffect(() => {
    getTime();
    getJson();

    setTimeout(() => {
      getTime();
    }, 60000);
  }, [time]);

  const getTime = () => {
    setTime(dayjs(new Date()).format("YYYY년 MM월 DD일 / HH시 mm분"));
  };

  const getJson = () => {
    if (JSON.parse(localStorage.getItem("game")) !== null) {
      let arr = JSON.parse(localStorage.getItem("game"));

      var len = arr.length;
      var swapped;

      do {
        swapped = false;
        for (var i = 0; i < len - 1; i++) {
          if (arr[i] < arr[i + 1]) {
            var temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            swapped = true;
          }
        }
      } while (swapped);

      setScorelist(arr);
    } else {
      return;
    }
  };

  return (
    <div id="header">
      <div className="logo" onClick={() => (window.location.href = "/")}>
        Country on Earth
      </div>
      <div className="times">{time}</div>
      <div className="top">
        <div>1st. {scorelist[0]} &nbsp;</div>
        <div>2nd. {scorelist[1]} &nbsp;</div>
        <div>3rd. {scorelist[2]} &nbsp;</div>
      </div>
    </div>
  );
}

export default Header;
