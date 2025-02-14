import { useState, useEffect } from "react";
import badcookieimg from "../assets/badcookie.png";
import cookieimg from "../assets/cookie.png";
import goldencookieimg from "../assets/goldencookie.png";
import cookiestar from "../assets/cookiestar.png";
import Confetti from "react-confetti-boom";

export default function Clicker() {
  const [click, setClicker] = useState(0);
  const [cookieState, setCookieState] = useState(cookieimg);
  const [confetti, setConfetti] = useState(false);
  const [lastClick, setLastClick] = useState(0);

  const clickCookie = () => {
    let cookieNum = Math.floor(Math.random() * 10) + 1;
    if (cookieNum === 1) {
      setCookieState(badcookieimg);
      setClicker((prevClick) => {
        if (prevClick <= 1) {
          return 0;
        } else {
          return prevClick - 2;
        }
      });
    } else if (cookieNum === 10) {
      setCookieState(goldencookieimg);
      setClicker((prevClick) => prevClick + 3);
    } else {
      setCookieState(cookieimg);
      setClicker((prevClick) => prevClick + 1);
    }
  };

  useEffect(() => {
    const currentMilestone = Math.floor(click / 100) * 100;
    if (currentMilestone !== lastClick && currentMilestone > lastClick) {
      setConfetti(true);
      setLastClick(click);
      setTimeout(() => setConfetti(false), 3000);
    }
  }, [click, lastClick]);

  return (
    <>
      <h2 className="cookieh">
        Your neighbourhood friendly Cookie Clicker, but with a twist!
      </h2>
      <div className="maincookie">
        <div className="pointlessdiv">
          <p className="pointlessp">
            {" "}
            Pointless amount of points: <span> {click} </span>
          </p>
          {confetti && <Confetti y="0.1" x="0.1" shapeSize="25" />}
          <img src={cookiestar} alt="cookie" />
        </div>
        <div className="cookiediv" onClick={clickCookie}>
          <img src={cookieState} alt="Cookie" className="imgcookie" />
          <p className="paracookie">
            {confetti && <Confetti y="0.1" x="0.1" shapeSize="25" />}
            {cookieState === cookieimg
              ? "Tasty tasty cookie!"
              : cookieState === badcookieimg
              ? "What a bad cookie!"
              : "Woowwie! A golden cookie!"}
          </p>
        </div>
        <button className="cookiebtn" onClick={() => setClicker(() => 0)}>
          Clear Cookies :3
        </button>
      </div>
    </>
  );
}
