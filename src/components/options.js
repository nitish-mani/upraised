import { useEffect, useState } from "react";

export default function Options({ d, percent, option, setOption }) {
  const [optionClicked, setOptionClicked] = useState(false);

  function handleOptionClick(e) {
    setOption([...option, { i: e.target.innerText === percent.Answer }]);

    setOptionClicked(true);
  }

  return (
    <>
      <div
        className="show-option"
        onClick={handleOptionClick}
        style={{ backgroundColor: optionClicked ? "blue" : "" }}
      >
        <input type="radio" checked={optionClicked ? true : false} />
        <span>{d}</span>
      </div>
    </>
  );
}
