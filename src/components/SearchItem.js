// 사전(검색, 페이지네이션)
import "../css/SearchItem.css";
import { useEffect, useState } from "react";

function SearchItem(props) {
  const [capital, setCapital] = useState("");
  const [area, setArea] = useState("");
  const [religion, setReligion] = useState("");
  const [language, setLanguage] = useState("");

  useEffect(() => {
    getInfo();
    getPlus();
  });

  const getInfo = () => {
    if (props.basic.indexOf("수도") > 1) {
      const z = props.basic.indexOf("수도");
      const x = props.basic.indexOf("<br>", z);
      const as = props.basic.slice(z + 4, x);
      //console.log(as);
      setCapital(as);
    } else if (props.basic.indexOf(" 도 :") > 1) {
      const z = props.basic.indexOf("도", 0);
      const x = props.basic.indexOf("<br>", z);
      const as = props.basic.slice(z + 4, x);
      //console.log(as);
      setCapital(as);
    } else if (props.basic.indexOf("주요도시") > 1) {
      const z = props.basic.indexOf("주요도시", 0);
      const x = props.basic.indexOf(",", z);
      const as = props.basic.slice(z + 6, x);
      //console.log(as);
      setCapital(as);
    }
    if (props.basic.indexOf("면적") > 1) {
      const z = props.basic.indexOf("면적");
      const x = props.basic.indexOf("<br>", z);
      const as = props.basic.slice(z + 4, x);
      //console.log(as);
      setArea(as);
    } else if (props.basic.indexOf("적 : ") > 1) {
      const z = props.basic.indexOf("적", 0);
      const x = props.basic.indexOf("<br>", z);
      const as = props.basic.slice(z + 2, x);
      //console.log(as);
      setArea(as);
    }
    if (props.basic.indexOf("종교") > 1) {
      const z = props.basic.indexOf("종교");
      const x = props.basic.indexOf("<br>", z);
      const as = props.basic.slice(z + 4, x);

      if (as.indexOf("</div") > 1) {
        const y = as.indexOf("</div");
        const bs = as.slice(0, y);
        //console.log(bs);
        setReligion(bs);
        return;
      }
      setReligion(as);
    }
    if (props.basic.indexOf(" 교 :") > 1) {
      const z = props.basic.indexOf("교");
      const x = props.basic.indexOf("<br>", z);
      const as = props.basic.slice(z + 3, x);

      if (as.indexOf("</div") > 1) {
        const y = as.indexOf("</div");
        const bs = as.slice(0, y);
        //console.log(bs);
        setReligion(bs);
        return;
      }
      setReligion(as);
    }

    if (props.basic.indexOf("언어") > 1) {
      const z = props.basic.indexOf("언어");
      const x = props.basic.indexOf("<br>", z);
      const as = props.basic.slice(z + 4, x);
      if (as.indexOf("</div") > 1) {
        const y = as.indexOf("</div");
        const bs = as.slice(0, y);
        //console.log(bs);
        setLanguage(bs);
        return;
      }
      //console.log(as);
      setLanguage(as);
    } else if (props.basic.indexOf("언 어") > 1) {
      const z = props.basic.indexOf("언 어", 0);
      const x = props.basic.indexOf("<br>", z);
      const as = props.basic.slice(z + 5, x);
      if (as.indexOf("</div") > 1) {
        const y = as.indexOf("</div");
        const bs = as.slice(0, y);
        //console.log(bs);
        setLanguage(bs);
        return;
      }
      //console.log(as);
      setLanguage(as);
    }
  };

  const getPlus = () => {
    if (props.countryName === "탄자니아") {
      setArea("945,087㎢(한반도 4.3배)");
    }
    if (props.countryName === "일본") {
      setReligion("무종교 62%, 불교 31%, 신토 3%, 기독교 1% 등");
    }
    if (
      props.countryName === "마카오(중국)" ||
      props.countryName === "홍콩(중국)"
    ) {
      setCapital("없음");
    }
    if (props.countryName === "이스라엘") {
      setCapital("에루살렘");
      setArea("22,145km²");
    }
    if (props.countryName === "모로코") {
      setCapital("라바트");
      setLanguage("아랍어(모로코 아랍어 방언인 데리자어가 상용)와 베르베르어");
    }
    if (props.countryName === "라오스") {
      setArea("236,800km²");
    }
    if (props.countryName === "몰도바") {
      setCapital("키시니우");
    }
    if (props.countryName === "베트남") {
      setReligion("불교(43.5%), 가톨릭(36.6%) 등");
    }
    if (props.countryName === "우간다") {
      setCapital("캄팔라");
      setReligion("가톨릭교 41.9%, 개신교 42%, 이슬람교 12% 등");
    }
    if (props.countryName === "세이셸") {
      setArea("455km²");
    }
    if (props.countryName === "싱가포르") {
      setCapital("싱가포르");
    }
    if (props.countryName === "핀란드") {
      setCapital("헬싱키");
    }
    if (props.countryName === "레소토") {
      setArea("30,355km²");
    }
    if (props.countryName === "노르웨이") {
      setCapital("오슬로");
    }
    if (props.countryName === "파나마") {
      setCapital("파나마시티");
    }
    if (props.countryName === "아르헨티나") {
      setCapital("부에노스아이레스");
    }
    if (props.countryName === "가나") {
      setLanguage("영어(공용어), 토착어(Twi어, Ewe어 등)");
    }
    if (props.countryName === "중국") {
      setLanguage("중국어");
    }
    if (props.countryName === "일본") {
      setLanguage("일본어");
    }
    if (props.countryName === "러시아") {
      setLanguage("러시아어");
    }
    if (props.countryName === "벨리즈") {
      setLanguage("영어 & 스페인어");
    }
    if (props.countryName === "캄보디아") {
      setLanguage("크메르어");
    }
    if (props.countryName === "칠레") {
      setLanguage("스페인어");
    }
    if (props.countryName === "체코") {
      setLanguage("체코어");
    }
    if (props.countryName === "요르단") {
      setLanguage("아랍어");
    }
    if (props.countryName === "폴란드") {
      setLanguage("폴란드어");
    }
    if (props.countryName === "인도네시아") {
      setLanguage("인니어, 말레이어");
    }
    if (props.countryName === "슬로베니아") {
      setLanguage("슬로베니아어");
    }
    if (props.countryName === "독일") {
      setLanguage("독일어");
    }
    if (props.countryName === "세네갈") {
      setLanguage("불어(공용어) 및 Wolof어");
    }
    if (props.countryName === "기니비사우") {
      setLanguage("포르투갈어(공용어)");
    }
    if (props.countryName === "감비아") {
      setLanguage("영어");
    }
    if (props.countryName === "기니") {
      setLanguage("불어");
    }
    if (props.countryName === "나미비아") {
      setLanguage(
        "English(공용어), German, Rukwangali, Silozi, Setswana, Damara/Nama, Afrikaans, Herero, Oshiwambo"
      );
    }
    if (props.countryName === "루마니아") {
      setLanguage("루마니아어");
    }
    if (props.countryName === "말리") {
      setLanguage("불어");
    }
    if (props.countryName === "슬로바키아") {
      setLanguage("슬로바키아어");
    }
    if (props.countryName === "바베이도스") {
      setLanguage("영어");
    }
    if (props.countryName === "우간다") {
      setLanguage("영어, 스와힐리어");
    }
    if (props.countryName === "자메이카") {
      setLanguage("영어, 파투아");
    }
    if (props.countryName === "트리니다드토바고") {
      setLanguage(" 공용어는 영어이며 스페인어, 프랑스어, 힌디어, 크레올어");
    }
    if (props.countryName === "네팔") {
      setLanguage("네팔어");
    }
    if (props.countryName === "북마케도니아") {
      setLanguage("마케도니아어, 알바니아어");
    }
    if (props.countryName === "모나코") {
      setLanguage("프랑스어");
    }
    if (props.countryName === "니카라과") {
      setLanguage("스페인어(공용어)");
    }
    if (props.countryName === "에스토니아") {
      setLanguage("에스토니아어");
    }
    if (props.countryName === "아이슬란드") {
      setLanguage("아이슬란드어");
    }
    if (props.countryName === "노르웨이") {
      setLanguage("노르웨이어");
    }
    if (props.countryName === "리히텐슈타인") {
      setLanguage("독어");
    }
    if (props.countryName === "몽골") {
      setLanguage("몽골어");
    }
    if (props.countryName === "에콰도르") {
      setLanguage("스페인어");
    }
    if (props.countryName === "예멘") {
      setLanguage("아랍어");
    }
    if (props.countryName === "수단") {
      setLanguage("아랍어, 영어");
    }
  };

  const moveSite = () => {
    window.location.href =
      "https://www.google.co.kr/maps/place/" + props.countryName + "/";
  };

  return (
    <div id="search-item" onClick={moveSite}>
      <div className="info-img">
        <img src={props.imgUrl} />
      </div>
      <div className="txt">
        <div className="info-country">
          국가명 : {props.countryName} ({props.countryEnName})
        </div>
        <div className="info-conti">대륙 : {props.continent}</div>

        <div className="info-capital">수도 : {capital}</div>
        <div className="info-area">면적: {area}</div>
        {religion ? <div className="info-rel">종교 : {religion}</div> : ""}

        <div className="info-lang">언어 : {language}</div>
      </div>
    </div>
  );
}

export default SearchItem;
