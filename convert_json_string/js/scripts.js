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
      myAlert("succsess", "Valor copiado para a área de transferencia!");
    })
    .catch((err) => {
      console.error("Erro ao copiar texto: ", err);
      myAlert("error", "Erro ao copiar texto!");
    });

  //   if (!resultExist) {
  //     return myAlert("warning", "Você precisa converter algo antes para copiar");
  //   } else {
  //     navigator.clipboard
  //       .writeText(resultExist)
  //       .then(() => {
  //         myAlert("succsess", "Valor copiado para a área de transferencia!");
  //       })
  //       .catch((err) => {
  //         console.error("Erro ao copiar texto: ", err);
  //         myAlert("error", "Erro ao copiar texto!");
  //       });
  //   }
}

function convertData(data, type) {
  if (!type) {
    return myAlert("warning", "Você precisa selecionar uma opção de conversão!");
  } else {
    if (type === "json-to-string") {
      try {
        let result = JSON.stringify(data);
        return result;
      } catch (error) {
        console.error(error);
        return myAlert("error", "Não foi possivel fazer a conversão do dado!");
      }
    } else {
      try {
        let result = JSON.parse(data);
        return result;
      } catch (error) {
        console.error(error);
        return myAlert("error", "Não foi possivel fazer a conversão do dado!");
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

function myAlert(type, alertMessage) {
  const alertElement = document.getElementById("alert");
  const alertElementMessage = document.getElementById("alert-message");

  if (type === "error") {
    alertElement.style.backgroundColor = "red";
  } else {
    if (type === "warning") {
      alertElement.style.backgroundColor = "orange";
    } else {
      alertElement.style.backgroundColor = "green";
    }
  }

  alertElementMessage.innerText = alertMessage;
  alertElement.style.visibility = "visible";

  setTimeout(function () {
    alertElementMessage.innerText = "";
    alertElement.style.visibility = "hidden";
  }, 3000);
}

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