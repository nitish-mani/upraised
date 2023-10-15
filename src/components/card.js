import { useNavigate } from "react-router";
import "../App.css";

export default function Card() {
    const navigate=useNavigate();
    function handleStart(){
        navigate('/question')
    }
  return (
    <div className="home">
      <h3 className="upraised">Upraised</h3>
      <div className="quiz">Quiz</div>
      <div className="start" onClick={handleStart}>Start</div>
    </div>
  );
}
