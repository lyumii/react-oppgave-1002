import React from "react";
import Clicker from "./Components/Clicker";
import Cats from "./Components/Cats";
import Users from "./Components/Users";

function App() {
  const [state, setState] = React.useState(null);

  const catComponent = () => setState("catstate");
  const cookieComponent = () => setState("cookiestate");
  const userComponent = () => setState("userstate");

  return (
    <>
      <header className="header">
        <h1>Pick your Poison</h1>
        <nav>
          <button
            className={state === "cookiestate" ? "hovered" : ""}
            onClick={cookieComponent}
          >
            Cookie Clicker
          </button>
          <button
            className={state === "catstate" ? "hovered" : ""}
            onClick={catComponent}
          >
            Cat Facts
          </button>
          <button
            className={state === "userstate" ? "hovered" : ""}
            onClick={userComponent}
          >
            Imaginary Friends
          </button>
        </nav>
      </header>
      <main>
        {state === "catstate" && <Cats />}
        {state === "cookiestate" && <Clicker />}
        {state === "userstate" && <Users />}
      </main>
    </>
  );
}
export default App;
