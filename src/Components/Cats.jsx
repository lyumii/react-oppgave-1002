import { useState, useEffect } from "react";

export default function Cats() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function catfacts() {
    const url = "https://catfact.ninja/fact?max_length=140";
    setLoading(true);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log("didnt fetch");
      }
      const data = await response.json();
      console.log(data.fact);
      setFacts(data.fact);
    } catch (error) {
      setError("No fact for you, sorry");
    } finally {
      setLoading(false);
    }
  }

  async function catpics() {
    const url = "https://api.thecatapi.com/v1/images/search";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log("didnt fetch");
      }
      const pic = await response.json();
      setCatPic(pic[0].url);
    } catch (error) {
      console.log("error", error);
    }
  }

  const [facts, setFacts] = useState("");
  const [catPic, setCatPic] = useState("");

  useEffect(() => {
    catfacts();
    catpics();
  }, []);

  return (
    <section>
      <div className="catBtns">
        <div className="catDiv">
          <img className="catimg" src={catPic} alt="picture of a cat" />
          {loading ? (
            <p className="catPar">...loading...</p>
          ) : error ? (
            <p className="catPar">{error}</p>
          ) : (
            <p className="catPar">{facts}</p>
          )}
        </div>
        <div className="btnDiv">
          <button>New fact please</button>
          <button>Fave me please</button>
        </div>
      </div>
      <article className="favelist">
        <h1 className="catlisth">My fave cat facts!</h1>
      </article>
    </section>
  );
}
