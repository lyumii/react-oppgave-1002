import React from "react";
import badcookieimg from "../assets/badcookie.png";
import cookieimg from "../assets/cookie.png";
import goldencookieimg from "../assets/goldencookie.png";
import cookiestar from "../assets/cookiestar.png";

export default function Clicker() {
  const [click, setClicker] = React.useState(0);
  const [cookieState, setCookieState] = React.useState(cookieimg);

  const clickCookie = () => {
    let cookieNum = Math.floor(Math.random() * 10) + 1;
    if (cookieNum === 1 || cookieNum === 2) {
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
          <img src={cookiestar} alt="cookie" />
        </div>
        <div className="cookiediv" onClick={clickCookie}>
          <img src={cookieState} alt="Cookie" className="imgcookie" />
          <p className="paracookie">
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
