// Variaveis
const erase = document.querySelector("#erase");
const submit = document.querySelector("#submit");
const copy = document.querySelector("#copy");

// Funções

function getInput() {
  const inputData = document.querySelector("#input-data").value;
  console.log(inputData);

  const inputConvertType = document.querySelector("#type-of-convertion").value;
  console.log(inputConvertType);

  let resultData = convertData(inputData, inputConvertType);

  document.querySelector("#result-data").value = resultData;

  return resultData;
}

function copyToClipBoard() {
  const resultExist = document.querySelector("#result-data").value;

  navigator.clipboard
    .writeText(resultExist)
    .then(() => {
      alert("Valor copiado para a área de transferencia!");
    })
    .catch((err) => {
      console.error("Erro ao copiar texto: ", err);
      alert("Erro ao copiar texto:");
    });

  //   if (!resultExist) {
  //     return alert("Você precisa converter algo antes para copiar");
  //   } else {
  //     navigator.clipboard
  //       .writeText(resultExist)
  //       .then(() => {
  //         alert("Valor copiado para a área de transferencia!");
  //       })
  //       .catch((err) => {
  //         console.error("Erro ao copiar texto: ", err);
  //         alert("Erro ao copiar texto:");
  //       });
  //   }
}

function convertData(data, type) {
  if (!type) {
    return alert("Você precisa selecionar uma opção de conversão!");
  } else {
    if (type === "json-to-string") {
      try {
        let result = JSON.stringify(data);
        return result;
      } catch (error) {
        console.error(error);
        return alert("Não foi possivel fazer a conversão do dado!");
      }
    } else {
      try {
        let result = JSON.parse(data);
        return result;
      } catch (error) {
        console.error(error);
        return alert("Não foi possivel fazer a conversão do dado!");
      }
    }
  }
}

function cleanAll() {
  document.querySelector("#input-data").value = "";
  document.querySelector("#type-of-convertion").value = "";
  document.querySelector("#result-data").value = "";
}

// function copyValue() {
//   navigator.clipboard
//     .writeText(data)
//     .then(() => {
//       alert("Valor copiado para a área de transferencia!");
//     })
//     .catch((err) => {
//       console.error("Erro ao copiar texto: ", err);
//       alert("Erro ao copiar texto:");
//     });
// }

// Eventos
erase.addEventListener("click", (e) => {
  e.preventDefault();
  cleanAll();
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getInput();
});

copy.addEventListener("click", (e) => {
  e.preventDefault();
  copyToClipBoard();
});

// document.addEventListener("click", (e) => {
//   const targetEl = e.target;
//   const parentEl = targetEl.closest("div");
//   let resultValue;
//     const parentElId = parentEl.querySelector("#result-container textarea").innerText
//   console.log(parentEl);
//   console.log(parentElId);

//   if (parentEl.getElementById("#result-container")) {
//     resultValue = document.querySelector(
//       "#result-container textarea"
//     ).innerHTML;
//     console.log(resultValue);
//   }
// });
