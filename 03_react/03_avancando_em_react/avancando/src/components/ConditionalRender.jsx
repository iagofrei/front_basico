import React from "react";

const ConditionalRender = () => {
  const x = true;

  const name = "Matheus";
  const y = 0;

  function teste(number) {
    if (number < 0) {
      return <div>y é menor que 0</div>;
    } else if (number < 5) {
      return <div>y é menor que 5</div>;
    } else {
      return <div>y é maior ou igual a 5</div>;
    }
  }
  return (
    <div>
      <div>
        {/* 7 - render condicional */}
        <h3>Isso será exibido?</h3>
        {x && <p>Se x for true sim!</p>}
        {/* 8 - adicionando else */}
        <h3>Render ternário:</h3>
        {name === "João" ? (
          <div>
            <p>O nome é João</p>
          </div>
        ) : (
          <div>
            <p>Nome não encontrado!</p>
          </div>
        )}
      </div>
      <div>
        <h3>If por uma função</h3>
        {teste(y)}
        <h3>If ternário dentro de if ternário</h3>
        {y < 0 ? (
          <div>y é menor que 0</div>
        ) : y < 5 ? (
          <div>y é menor que 5</div>
        ) : (
          <div>y é maior ou igual a 5</div>
        )}
      </div>
    </div>
  );
};

export default ConditionalRender;
