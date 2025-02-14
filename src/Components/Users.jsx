import React from "react";
import animalEmojis from "./AnimalEmoji";

export default function Users() {
  const mockData = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];

  const [name, setName] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [data, setData] = React.useState(mockData);

  const addNew = (e) => {
    e.preventDefault();
    if (!name || !mail) return;
    const newUser = { username: name, email: mail };
    setData([...data, newUser]);
    setName("");
    setMail("");
  };

  return (
    <section className="usersection">
      <h2>Your totally real friends!</h2>
      <div>
        <ul className="userul">
          {data.map((user, index) => {
            return (
              <li className="usercard" key={index}>
                <img
                  src={animalEmojis[index % animalEmojis.length]}
                  alt="Animal Emoji"
                  className="animalemoji"
                />
                <div>
                  <p className="username">{user.username}</p>
                  <p className="useremail">{user.email}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <h2>Make belive a new friend! </h2>
      <form onSubmit={addNew}>
        <label htmlFor="nameinput">
          Imaginary name:{" "}
          <input
            type="text"
            id="nameinput"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="">
          Imaginary email:{" "}
          <input
            type="text"
            id="mailinput"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </label>
        <button type="submit">Add totally existing friend</button>
      </form>
    </section>
  );
}
