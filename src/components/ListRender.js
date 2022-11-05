import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Bruno", "José", "Richard"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Bruno", idade: 30 },
    { id: 2, name: "José", idade: 25 },
    { id: 3, name: "Richard", idade: 11 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.idade}
            </li>
          ))}
        </ul>
        <button onClick={deleteRandom}>Deletar</button>
      </div>
    </div>
  );
};

export default ListRender;
