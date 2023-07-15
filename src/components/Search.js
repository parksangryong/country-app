// 사전(검색, 페이지네이션)
import "../css/Search.css";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchItem from "./SearchItem";

function Search() {
  const [countrylist, setCountrylist] = useState([]);
  const [current, setCurrent] = useState(1);
  const page = 15;
  const total = countrylist.length;
  const endpage = total / page + 1;

  useEffect(() => {
    getcountry();
    //console.log(countrylist);
    //console.log(total);
  }, []);

  const getcountry = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;

    const result = await axios.get(
      `https://apis.data.go.kr/1262000/CountryBasicService/getCountryBasicList?serviceKey=${API_KEY}&numOfRows=500&pageNo=1`
    );
    //console.log(result.data.response.body.items.item);
    setCountrylist(result.data.response.body.items.item);
  };

  const result = countrylist
    .slice((current - 1) * page, current * page)
    .map((data) => (
      <SearchItem
        key={data.countryEnName}
        basic={data.basic}
        continent={data.continent}
        countryName={data.countryName}
        countryEnName={data.countryEnName}
        imgUrl={data.imgUrl}
      />
    ));

  const pagelist = [];

  for (var i = 1; i < endpage; i++) {
    pagelist.push(i);
  }

  const pages = pagelist.map((data) => (
    <div
      key={data}
      onClick={() => setCurrent(data)}
      className={current === data ? "active" : ""}
    >
      {data}
    </div>
  ));

  return (
    <div id="search">
      {result}
      <div className="pages">{pages}</div>
    </div>
  );
}

export default Search;
