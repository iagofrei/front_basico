import { useState } from "react";

const Data = () => {
  let someData = 10;

  const someOtherData = 15;

  const [anotherNumber, setAnotherNumber] = useState(someOtherData);
  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar variável</button>
      </div>
      <div>
        <p>Valor: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(20)}>Mudar state</button>
        <button onClick={() => setAnotherNumber(someOtherData)}>Reset state</button>
      </div>
    </div>
  );
};

export default Data;
