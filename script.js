// Variáveis - variables
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

// 3 maneiras de criar e atribuir função a um evento
//form.onsubmit = function (event) {
//form.onsubmit = () => {}
//form.onsubmit = handleSubmit
//function handleSubmit() {}

// objeto literal
const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),

  open() {
    Modal.wrapper.classList.add("open");
  },
  close() {
    Modal.wrapper.classList.remove("open");
  }
};

//padrão de um evento submit é carregar a página
//função para evitar o padrão
form.onsubmit = (event) => {
  event.preventDefault();
  const weight = inputWeight.value;
  const height = inputHeight.value;
  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  //  modalWrapper.classList.add("open");
  Modal.open();
};

Modal.buttonClose.onclick = () => {
  //modalWrapper.classList.remove("open");
  Modal.close();
};

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
