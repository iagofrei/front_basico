import React from "react";
// 5 - hierarquia de componentes
import MyComponent from "./MyComponent";

const TemplateExpression = () => {
  const name = "Iago";
  const data = {
    age: 21,
    job: "Programador",
  };
  return (
    <div>
      <p>A soma é {2 + 2}</p>
      <h3>Bem vindo {name}</h3>
      <p>Sua idade é {data.age}</p>
      <p>Sua profissão é {data.job.toLowerCase()}</p>
      <MyComponent />
    </div>
  );
};

export default TemplateExpression;
