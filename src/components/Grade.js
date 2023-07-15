//현재 전체 점수
import "../css/Grade.css";

function Grade() {
  let scorelist = JSON.parse(localStorage.getItem("game"));

  const result = scorelist.map((data) => <div>{data}</div>);
  return (
    <div id="grade">
      점수판
      <div>{result}</div>
    </div>
  );
}

export default Grade;
