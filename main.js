//variáveis
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const inputNumber = document.querySelector("#inputNumber");

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', resetWithEnter)
inputNumber.addEventListener('blur', isValidNumber)

//Funções Callback

function handleTryClick(event) {
  event.preventDefault();

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    const msg = xAttempts==1?"tentativa":"tentativas"

    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} ${msg}`;
  }

  if(inputNumber.value!='') {
    inputNumber.value = "";
    xAttempts++;
  }
}

function handleResetClick(e) {
  toggleScreen()
  randomNumber = Math.round(Math.random() * 10);
  xAttempts = 1;
}

function toggleScreen(){
  screen2.classList.toggle("hide");
  screen1.classList.toggle("hide");
}

function resetWithEnter(e) {
  if(e.key=='Enter' && screen1.classList.contains('hide')){
    handleResetClick()
  }
}

function isValidNumber(){
  if((inputNumber.value<0)||(inputNumber.value>10)){
    alert("Digite um número entre 0 e 10")
    inputNumber.value = "";
  }
}