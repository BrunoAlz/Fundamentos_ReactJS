import { useState } from "react";

const ManageData = () => {
  let someData = 10;

  const [number, setNumber] = useState(10);

  return (
    <div>
      <div>
        <p>Valor de someData {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar valor</button>
      </div>

      <div>
        <p>Valor de Number {number}</p>
        <button onClick={() => setNumber(15)}>Mudar State</button>
        <p></p>
      </div>
    </div>
  );
};

export default ManageData;
