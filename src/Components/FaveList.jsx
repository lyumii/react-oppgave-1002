import catbg from "../assets/cat.png";

export default function FaveList({ favoriteCatFactsList }) {
  return (
    <article className="favelist">
      <h2 className="catlisth">My fave cat facts!</h2>
      <ul>
        {favoriteCatFactsList.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
      <img src={catbg} alt="cartoon cat stretching" />
    </article>
  );
}
