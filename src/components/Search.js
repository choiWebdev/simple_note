import React, { useState } from "react";
import "../styles/Search.css";

function Search({onSearch}) {
  const [inputValue, setInputValue] = useState();

  function handleChange(e) {
    const value = e.target.value;

    setInputValue(value);
    onSearch(value);
  }

  return (
    <div className="search">
      <form autoComplete="off">
        <input
          className="ipt_sch"
          type="search"
          name="search"
          value={inputValue}
          onChange={handleChange}
          placeholder="검색어를 입력하세요"
        />
      </form>
    </div>
  );
}

export default Search;
