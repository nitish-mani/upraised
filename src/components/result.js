import { useNavigate } from "react-router";

export default function Result({ result }) {
  //   console.log(result);

  const navigate = useNavigate();
  let currect = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] && result[i].i) currect++;
  }
  function handleStartAgain() {
    navigate("/");
  }

  return (
    <div className="result">
      <div className="result-child">
        <div>
          <h2>Your Result</h2>
          <div
            className="div1"
            style={{
              backgroundImage: `conic-gradient(green ${
                currect * 10
              }%,rgba(0, 128, 0, 0.292) 0)`,
            }}
          >
            <div className="div1-div">{currect * 10}%</div>
          </div>
        </div>
        <div className="correct">{currect} Correct</div>
        <div className="incorrect">{result.length - currect} Incorrect</div>
        <div className="start-again" onClick={handleStartAgain}>
          Start Again
        </div>
      </div>
    </div>
  );
}
