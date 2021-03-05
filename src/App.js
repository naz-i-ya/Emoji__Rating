import { useState } from "react";
import "./App.css";
import one from "./emojis/1.svg";
import two from "./emojis/2.svg";
import three from "./emojis/3.svg";
import four from "./emojis/4.svg";
import five from "./emojis/5.svg";

function App() {
  const [rating, setRating] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <p>How was the help you received?</p>
        <div className="container">
          <div className="image-container">
            <div className="img-box">
              <img
                src={one}
                className={`emoji ${rating === 1 && "emoji-selected"}`}
                alt="angry"
                onClick={() => {
                  setRating(1);
                }}
              />
              <p className={`text ${rating === 1 && "text-selected"}`}>
                Terrible
              </p>
            </div>
            <div className="img-box">
              <img
                src={two}
                className={`emoji ${rating === 2 && "emoji-selected"}`}
                alt="sad"
                onClick={() => {
                  setRating(2);
                }}
              />
              <p className={`text ${rating === 2 && "text-selected"}`}>Bad</p>
            </div>
            <div className="img-box">
              <img
                src={three}
                className={`emoji ${rating === 3 && "emoji-selected"}`}
                alt="neutral"
                onClick={() => {
                  setRating(3);
                }}
              />
              <p className={`text ${rating === 3 && "text-selected"}`}>Okay</p>
            </div>
            <div className="img-box">
              <img
                src={four}
                className={`emoji ${rating === 4 && "emoji-selected"}`}
                alt="happy"
                onClick={() => {
                  setRating(4);
                }}
              />
              <p className={`text ${rating === 4 && "text-selected"}`}>Good</p>
            </div>
            <div className="img-box">
              <img
                src={five}
                className={`emoji ${rating === 5 && "emoji-selected"}`}
                alt="very happy"
                onClick={() => {
                  setRating(5);
                }}
              />
              <p className={`text ${rating === 5 && "text-selected"}`}>Great</p>
            </div>
          </div>
          <hr className="line" />
        </div>
      </header>
    </div>
  );
}

export default App;
