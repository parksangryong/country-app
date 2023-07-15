//사전 or 게임 선택
import "../css/Home.css";

function Home() {
  return (
    <div id="home">
      <div onClick={() => (window.location.href = "/search")}>지도 속으로</div>
      <div onClick={() => (window.location.href = "/gamehome")}>
        국가 맞추기 게임!
      </div>
    </div>
  );
}

export default Home;
