//게임하기
import { useEffect, useState } from "react";
import "../css/Gamehome.css";
import axios from "axios";
import Game from "./Game";

function Gamehome() {
  const [quizlist, setQuizlist] = useState([]);
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(0);
  const [page, setPage] = useState(5);

  useEffect(() => {
    getcountry();
  }, [page]);

  const getcountry = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;

    const result = await axios.get(
      `https://apis.data.go.kr/1262000/CountryBasicService/getCountryBasicList?serviceKey=${API_KEY}&numOfRows=500&pageNo=1`
    );
    //console.log(result.data.response.body.items.item);
    //setCountrylist(result.data.response.body.items.item);
    let alist = [];

    for (var i = 0; i < page; i++) {
      const random = Math.floor(Math.random() * 197);
      alist.push(result.data.response.body.items.item[random]);
    }
    console.log(alist);

    setQuizlist(alist);
  };

  const addCurrent = (add) => {
    //console.log(current);

    setCurrent(current + 1);
    setScore(score + add);
  };

  const newgame = () => {
    setCurrent(0);
    setScore(0);
    getcountry();
  };

  const savegame = () => {
    let scorelist = JSON.parse(localStorage.getItem("game"));

    let obj = [];

    if (!scorelist) {
      //var num = 1;
      //obj = [{ num: num, score: `${score}` }];
      obj = [score];
    } else {
      //var num = scorelist.length + 1;
      //obj = [...scorelist, { num: num, score: `${score}` }];
      obj = [...scorelist, score];
    }

    localStorage.setItem("game", JSON.stringify(obj));
  };

  console.log(page, current);

  if (!quizlist[0]) {
    return <div id="game-home">시작 중...</div>;
  } else if (current == page) {
    return (
      <div id="game-home">
        최종 점수 : {score}
        <button onClick={() => savegame()}>저장</button>
        <button onClick={() => newgame()}>다시 시작</button>
      </div>
    );
  } else if (current <= page - 1) {
    return (
      <div id="game-home">
        <div id="optical">
          <Game
            basic={quizlist[current].basic}
            continent={quizlist[current].continent}
            countryName={quizlist[current].countryName}
            countryEnName={quizlist[current].countryEnName}
            imgUrl={quizlist[current].imgUrl}
            score={score}
            addCurrent={addCurrent}
          />
          난이도 조절:{" "}
          <select onChange={(e) => setPage(e.target.value)} value={page}>
            <option value={5}>5 - 쉬움</option>
            <option value={7}>7 - 보통</option>
            <option value={10}>10 - 어려움</option>
            <option value={20}>20 - 매우 어려움</option>
            <option value={30}>30 - 헬</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Gamehome;
