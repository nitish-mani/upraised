import { useEffect, useState } from "react";
import "../App.css";
import apiData from "../data/data";
import Options from "./options";
import { useNavigate } from "react-router";
export default function QuestionCard({ setResult }) {
  const [percent, setPercent] = useState(1);
  const [option, setOption] = useState([]);
  const [ans, setAns] = useState([]);

  const [optionClicked, setOptionClicked] = useState(false);
  const navigate = useNavigate();

  function handleNext() {
    if (percent <= 10) setPercent(() => percent + 1);
    if (percent >= 10) {
      setPercent(10);

      //   setOptionClicked(true);
      navigate("/result");
    }
    setAns([...ans, option[0]]);
    setResult([...ans, option[0]]);
    setOption([]);
  }

  return (
    <div>
      {apiData[percent - 1].map((d, it) => (
        <div className="questionCard" key={percent - 1}>
          <div className="circle">
            <div
              className="progressBar"
              style={{
                backgroundImage: `conic-gradient(green ${
                  percent * 10
                }%,rgba(0, 128, 0, 0.292) 0)`,
              }}
            >
              <div className="progressBar-child">
                <h2>
                  {percent}/{apiData.length}
                </h2>
              </div>
            </div>
          </div>
          <div className="show-question">
            <h3>{d.Question}</h3>

            {d.Options.map((d1, i) => (
              <Options
                d={d1}
                percent={d}
                option={option}
                setOption={setOption}
              />
            ))}

            <div className="next-question" onClick={handleNext}>
              {optionClicked ? "Result" : "Next"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
