const ChangeMessageState = ({ handleMessage }) => {
  const messages = ["Oi", "Olá", "Tudo bem?", ""];

  return (
    <div>
      <button onClick={() => handleMessage(messages[0])}>1</button>
      <button onClick={() => handleMessage(messages[1])}>2</button>
      <button onClick={() => handleMessage(messages[2])}>3</button>
      <button onClick={() => handleMessage(messages[3])}>Reset</button>
    </div>
  );
};

export default ChangeMessageState;
