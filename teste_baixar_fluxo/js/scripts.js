const org_units = [
  {
    ou_id: "78ad4f12-642d-40d7-9e41-ca10a9ade894",
    ou_name: "PF",
    chats: [
      {
        chat_id: "aab5fc86-8487-4578-addf-afd4ee0be8b6",
        chat_name: "ACT_COR_PF",
      },
    ],
  },
  {
    ou_id: "8f512fa2-a15a-423a-a141-c6d8b8b225e8",
    ou_name: "PJ",
    chats: [
      {
        chat_id: "14911277-221e-41aa-855d-85d5c2021763",
        chat_name: "ACT_COR_PJ",
      },
    ],
  },
  {
    ou_id: "b923c2e6-7fee-42e5-93ef-e232f32d2f11",
    ou_name: "WhatsApp-PF",
    chats: [
      {
        chat_id: "a7e84fee-b41a-4038-aa88-d3b8aeaebafa",
        chat_name: "WHATS_COR_PF",
      },
    ],
  },

  {
    ou_id: "fd8c3cec-4db0-41ff-b284-4db511212751",
    ou_name: "WhatsApp-PJ",
    chats: [
      {
        chat_id: "c69f997c-1c39-4bf4-92a8-2bca3eab1d06",
        chat_name: "WHATS_COR_PJ",
      },
    ],
  },
];

const jornadas = [
  {
    flow_id: "91f4a66b-b501-48ed-9407-794f23a413d1",
    flow_name: "jornada_consulta_saldo",
    flow_version: 3,
    flow_type: "floweditor",
    status: "PUBLISHED",
    tenants: [
      {
        tenant_id: "78ad4f12-642d-40d7-9e41-ca10a9ade894",
        tenant_name: "PF",
      },
      {
        tenant_id: "b923c2e6-7fee-42e5-93ef-e232f32d2f11",
        tenant_name: "WhatsApp-PF",
      },
    ],
  },
  {
    flow_id: "a8438065-4f8c-4f22-91e4-91c1c975e5cd",
    flow_name: "jornada_consulta_limite",
    flow_version: 25,
    flow_type: "floweditor",
    status: "PUBLISHED",
    tenants: [
      {
        tenant_id: "78ad4f12-642d-40d7-9e41-ca10a9ade894",
        tenant_name: "PF",
      },
    ],
  },
  {
    flow_id: "bf84d12a-192b-4c5f-8e9e-8fac3f3683a7",
    flow_name: "jornada_consulta_cnpj",
    flow_version: 120,
    flow_type: "floweditor",
    status: "PUBLISHED",
    tenants: [
      {
        tenant_id: "8f512fa2-a15a-423a-a141-c6d8b8b225e8",
        tenant_name: "PJ",
      },
    ],
  },
  {
    flow_id: "a8438065-4f8c-4f22-91e4-91c1c975e5cd",
    flow_name: "jornada_aumento_limite_conversacional",
    flow_version: 10,
    flow_type: "builder",
    status: "PUBLISHED",
    tenants: [
      {
        tenant_id: "14911277-221e-41aa-855d-85d5c2021763",
        tenant_name: "ACT_COR_PF",
      },
      {
        tenant_id: "a7e84fee-b41a-4038-aa88-d3b8aeaebafa",
        tenant_name: "WHATS_COR_PF",
      },
    ],
  },
  {
    flow_id: "a8438065-4f8c-4f22-91e4-91c1c975e5cd",
    flow_name: "jornada_aumento_limite_tecnica",
    flow_version: 4,
    flow_type: "databuilder",
    status: "PUBLISHED",
    tenants: [
      {
        tenant_id: "14911277-221e-41aa-855d-85d5c2021763",
        tenant_name: "ACT_COR_PF",
      },
      {
        tenant_id: "a7e84fee-b41a-4038-aa88-d3b8aeaebafa",
        tenant_name: "WHATS_COR_PF",
      },
    ],
  },

  {
    flow_id: "390deba3-2223-420c-b5a0-e97440d814be",
    flow_name: "jornada_consulta_status_cnpj",
    flow_version: 4,
    flow_type: "builder",
    status: "PUBLISHED",
    tenants: [
      {
        tenant_id: "c69f997c-1c39-4bf4-92a8-2bca3eab1d06",
        tenant_name: "WHATS_COR_PJ",
      },
    ],
  },
];

// Elementos
const flowType = document.querySelector("#flow-type");
const flowTypeSelect = document.querySelector("#flow-type select");
const flowTypeOption = document.querySelector("#flow-type option");
const flowTypeValue = flowTypeOption.value;

const unityOrg = document.querySelector("#unity-organization");
const unityOrgSelect = document.querySelector("#unity-organization select");
const unityOrgSelectTest = document.querySelector("#ou");
const unityOrgOption = document.querySelector("#unity-organization option");
const unityOrgValue = unityOrgOption.value;

const chat = document.querySelector("#chat");
const chatSelect = document.querySelector("#chat select");
const chatSelectTest = document.querySelector("#chats");
const chatOption = document.querySelector("#chat option");
const chatValue = chatOption.value;

const search = document.querySelector("#search");

const flowTable = document.querySelector("#container-table");
const tableData = document.querySelector(".table-data");

// const downloads = document.querySelectorAll(".download");

console.log(`Tipo de fluxo selecionado: ${flowTypeValue}`);
console.log(`OU selecionada: ${unityOrgValue}`);
console.log(`Chat selecionado: ${chatValue}`);
// console.log(downloads);

// Funções

// function listOu(org_units) {
//   org_units.forEach((item) => {
//     const template = `<option value="${item.ou_name}">${item.ou_name}</option>`;

//     const parser = new DOMParser();

//     optionTamplate = parser.parseFromString(template, "text/html");

//     const option = document.createAttribute("option");
//     option.nodeValue = item.ou_name
//     option.innerText = item.ou_name;

//     unityOrgSelections.appendChild(option);
//   });
// }

// lista = listOu(org_units);

// console.log(lista);

function clickButton() {
  createTable(jornadas);
}

function filter(data, typeOfFlow) {
  const flowTypeSelected = flowTypeSelect.value;
  const ouSelected = unityOrgSelect.value;
  const chatSelected = chatSelect.value;

  const filteredJornadas = data.filter(
    (jornada) => jornada.flow_type == typeOfFlow
  );

  console.log(filteredJornadas);
  createTable(filteredJornadas);
}

function filterByChat(data, selectedChat) {
  const flowTypeSelected = flowTypeSelect.value;
  const ouSelected = unityOrgSelect.value;
  // const chatSelected = chatSelect.value;

  console.log(`FilterByChat ${flowTypeSelected}`);
  console.log(`FilterByChat ${selectedChat}`);

  const filteredJornadasByChat = data.filter(
    (jornada) =>
      jornada.flow_type == flowTypeSelected &&
      jornada.tenants.some((tenant) => tenant.tenant_name == selectedChat)
  );

  console.log(filteredJornadasByChat);
  createTable(filteredJornadasByChat);
}

function createTable(data) {
  data.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("table-data");

    const flowName = document.createElement("p");
    flowName.innerText = element.flow_name;

    const flowStatus = document.createElement("p");
    flowStatus.innerText = element.status;

    const flowVersion = document.createElement("p");
    flowVersion.innerText = element.flow_version;

    const button = document.createElement("button");
    button.classList.add("download");
    button.innerText = "Download";

    div.appendChild(flowName);
    div.appendChild(flowStatus);
    div.appendChild(flowVersion);
    div.appendChild(button);
    flowTable.appendChild(div);

    console.log(element);
    console.log(div);
  });
  const downloads = document.querySelectorAll(".download");
  console.log(downloads);

  downloads.forEach((download) => {
    download.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(download);
      return alert("Fluxo baixado!");
    });
  });
}

function hideSelectors() {
  unityOrg.classList.add("hide");
  chat.classList.add("hide");
}

function hideSelectorsOrg() {
  unityOrg.classList.add("hide");
}

function hideSelectorChat() {
  chat.classList.add("hide");
}

function showSelectorsOrg() {
  unityOrg.classList.remove("hide");
}

function showSelectorsChat() {
  chat.classList.remove("hide");
}

function cleanTable() {
  const divs = document.querySelectorAll(".table-data");
  console.log(divs);
  //   flowTable.removeChild(divs.innerHTML);
  divs.forEach((div) => flowTable.removeChild(div));
}

function setectionOUs(org_units) {
  const options = document.querySelectorAll(".created-ou-option");
  options.forEach((optiones) => unityOrgSelectTest.removeChild(optiones));

  org_units.forEach((optionsOus) => {
    const option = document.createElement("option");
    option.classList.add("created-ou-option");
    option.value = optionsOus.ou_name;
    option.textContent = optionsOus.ou_name;
    unityOrgSelectTest.appendChild(option);
  });
}

function selectionChats(org_units, ouSelected) {
  const options = document.querySelectorAll(".created-chat-option");
  options.forEach((optiones) => chatSelectTest.removeChild(optiones));

  const ouSelectedByUser = org_units.find((ou) => ou.ou_name == ouSelected);

  console.log(ouSelectedByUser);

  if (ouSelectedByUser) {
    ouSelectedByUser.chats.forEach((chat) => {
      const option = document.createElement("option");
      option.classList.add("created-chat-option");
      option.value = chat.chat_name;
      option.textContent = chat.chat_name;
      chatSelectTest.appendChild(option);
    });
  } else {
    return alert("Chats não encontrados");
  }

  // chatsFiltered.forEach((optionsChats) => {
  //   const option = document.createElement("option");
  //   option.classList.add("created-chat-option");
  //   option.value = optionsChats.forEach((chats) => chats.chat_name);
  //   option.textContent = optionsChats.forEach((chats) => chats.chat_name);
  //   chatSelectTest.appendChild(option);
  // });
}

// Init
filter(jornadas, "floweditor");

// Eventos
flowTypeSelect.addEventListener("input", (e) => {
  // cleanTable();
  console.log(`Tipo de fluxo selecionado: ${flowTypeSelect.value}`);
  if (flowTypeSelect.value == "floweditor") {
    hideSelectors();
    console.log(unityOrg);
    console.log(chat);
    // hideSelectorsOrg();
    // hideSelectorChat();
    // cleanTable();
    // filter(jornadas, flowTypeSelect.value);
  } else {
    if (flowTypeSelect.value == "builder") {
      // showSelectors();
      showSelectorsOrg();
      hideSelectorChat();
      setectionOUs(org_units);
    } else {
      // showSelectors();
      showSelectorsOrg();
      hideSelectorChat();
      setectionOUs(org_units);
    }
  }
  //   console.log(unityOrg);
  //   console.log(tableData);
  // filter(jornadas);
});

unityOrgSelect.addEventListener("input", (e) => {
  console.log(`OU selecionada: ${unityOrgSelect.value}`);
  showSelectorsChat();
  selectionChats(org_units, unityOrgSelect.value);
});

chatSelect.addEventListener("input", (e) => {
  // cleanTable();
  console.log(`Chat selecionado: ${chatSelect.value}`);
  // filterByChat(jornadas, chatSelect.value);
});

search.addEventListener("click", (e) => {
  e.preventDefault();
  cleanTable();
  if (flowTypeSelect.value == "floweditor") {
    filter(jornadas, flowTypeSelect.value);
  } else {
    filterByChat(jornadas, chatSelect.value);
  }
});

// downloads.forEach((download) => {
//   download.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log(download);
//     return alert("Fluxo baixado!");
//   });
// });

// downloads.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(downloads);
//   return alert("Fluxo baixado!");
// });
