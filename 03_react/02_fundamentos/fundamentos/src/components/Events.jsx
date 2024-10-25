import React from "react";

const Events = () => {
  const handleClick = () => {
    console.log("Executou o clique no segundo botão!");
  };

  // 8 - Função de renderização
  const renderSomething = (x) => {
    if (x) {
      return <h2>Renderizando isso!</h2>;
    } else {
      return <h2>Renderizando outra coisa!</h2>;
    }
  };

  //   return 10 > 2 && <p>Carregando...</p>;

  return (
    <div>
      <div>
        <button onClick={() => console.log("Testando um evento de clique!")}>
          Clique aqui
        </button>
      </div>
      {/* 7 -  evento com funcão*/}
      <div>
        <button onClick={handleClick}>Clique aqui - com função</button>
      </div>
      {/* 8 - Função com render */}
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
