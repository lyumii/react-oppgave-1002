import { useState, useEffect } from "react";
import FaveList from "./FaveList";

export default function Cats() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchAll() {
    setLoading(true);
    try {
      const promise1 = catfacts();
      const promise2 = catpics();
      const result = await Promise.all([promise1, promise2]);
      return result;
    } catch (error) {
      setError("No fact for you, sorry");
    } finally {
      setLoading(false);
    }
  }

  async function catfacts() {
    const url = "https://catfact.ninja/fact?max_length=140";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log("didnt fetch");
      }
      const data = await response.json();
      console.log(data.fact);
      setFacts(data.fact);
    } catch (error) {
      console.log("Error", error);
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
  const [favoriteCatFactsList, setFavoriteList] = useState([]);
  const [newFact, setNewFact] = useState(false);

  function addFave() {
    if (facts && !favoriteCatFactsList.includes(facts)) {
      setFavoriteList((prevList) => [...prevList, facts]);
      setNewFact(true);
    }
  }

  useEffect(() => {
    fetchAll();
  }, []);

  useEffect(() => {
    if (newFact) {
      setNewFact(false);
    }
  });

  return (
    <section className="catsection">
      <div className="catBtns">
        <div className="catDiv">
          {loading ? (
            <p className="catPar">...loading...</p>
          ) : error ? (
            <p className="catPar">{error}</p>
          ) : (
            <article>
              <img className="catimg" src={catPic} alt="picture of a cat" />
              <p className="catPar">{facts}</p>
            </article>
          )}
        </div>
        <div className="btnDiv">
          <button onClick={fetchAll}>New fact please</button>
          <button onClick={addFave}>Fave me please</button>
        </div>
      </div>
      {favoriteCatFactsList.length > 0 && (
        <FaveList favoriteCatFactsList={favoriteCatFactsList} />
      )}
    </section>
  );
}
