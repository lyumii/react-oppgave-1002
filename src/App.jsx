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
    <header className="header">
      <h1>Pick your Poison</h1>
      <nav>
        <button onClick={cookieComponent}>Cookie Clicker</button>
        <button onClick={catComponent}>Cat Facts</button>
        <button onClick={userComponent}>Imaginary Friends</button>
      </nav>
      <main>
        {state === "catstate" && <Cats />}
        {state === "cookiestate" && <Clicker />}
        {state === "userstate" && <Users />}
      </main>
    </header>
  );
}
export default App;
