const h3Text = document.getElementById("h3Text")
const h2Text = document.getElementById("h2Text")
const userInputDiv = document.getElementById("userInputDiv")
const userInput = document.getElementById("userInput")
const formDiv = document.getElementById("formDiv")
const resetForm = document.getElementById("resetForm")
const submitBtn = document.getElementById("submitBtn")
const returnBtn = document.getElementById("returnBtn")
const resetInput = document.getElementById("resetInput")
const typeOfConversionText = document.getElementById("typeOfConversionText")
const userTemperature = document.getElementById("userTemperature")
const resultInfos = document.getElementById("resultInfos")
const resultDiv = document.getElementById("resultDiv")
const result = document.getElementById("result")
const radios = document.querySelectorAll(".option")
let radioChecked = false

function toggleVisibility(elements, display){
  elements.forEach(element =>{
      element.style.display = display
  });
}
radios.forEach(radio => {
  radio.addEventListener("change", function () {
    if(this.checked){
      radioChecked = true
      const label = document.querySelector(`label[for="${this.id}"]`)
      toggleVisibility([userInputDiv], "block")
      typeOfConversionText.textContent = `Opção selecionada: ${label.textContent}`
    }
  });
});

function hideUserDiv(){
  toggleVisibility([userInputDiv], "none")
}

const possibleConversions = {
  celsiusToFahrenheit: c => ((c * 9/5) + 32).toFixed(1),
  fahrenheitToCelsius: f => ((f - 32) * 5/9).toFixed(1),
  celsiusToKelvin: c => (c + 273.15).toFixed(1),
  kelvinToCelsius: k => (k - 273.15).toFixed(1),
  kelvinToFahrenheit: k => ((k - 273.15) * 9/5 + 32).toFixed(1),
  fahrenheitToKelvin: f => ((f - 32) * 5/9 + 273.15).toFixed(1)
};

function convertTemperature() {
  const inputValue = parseFloat(userInput.value);
  const radioSelected = document.querySelector('input.option:checked');

  if (!inputValue || !radioSelected) 
    return;

  switch (radioSelected.id) {
    case "input1":
      userTemperature.innerHTML = `Entrada: <span style="color: hsla(0, 100%, 50%, 0.606);"> ${inputValue} ℃ </span>`
      result.textContent = `${possibleConversions.celsiusToFahrenheit(inputValue)} ℉`;
      break;
    case "input2":
      userTemperature.innerHTML = `Entrada: <span style="color: hsla(0, 100%, 50%, 0.606);"> ${inputValue} ℉ </span>`
      result.textContent = `${possibleConversions.fahrenheitToCelsius(inputValue)} ℃`;
      break;
    case "input3":
      userTemperature.innerHTML = `Entrada: <span style="color: hsla(0, 100%, 50%, 0.606);"> ${inputValue} ℃ </span>`
      result.textContent = `${possibleConversions.celsiusToKelvin(inputValue)} K`;
      break;
    case "input4":
      userTemperature.innerHTML = `Entrada: <span style="color: hsla(0, 100%, 50%, 0.606);"> ${inputValue} K </span>`
      result.textContent = `${possibleConversions.kelvinToCelsius(inputValue)} ℃`;
      break;
    case "input5":
      userTemperature.innerHTML = `Entrada: <span style="color: hsla(0, 100%, 50%, 0.606);"> ${inputValue} K </span>`
      result.textContent = `${possibleConversions.kelvinToFahrenheit(inputValue)} ℉`;
      break;
    case "input6":
      userTemperature.innerHTML = `Entrada: <span style="color: hsla(0, 100%, 50%, 0.606);"> ${inputValue} ℉ </span>`
      result.textContent = `${possibleConversions.fahrenheitToKelvin(inputValue)} K`;
      break;
  }
}

userInput.addEventListener("keydown", function(event){
  if(event.key === "Enter" && userInput.value){
    toggleVisibility([h3Text, formDiv, userInputDiv], "none")
    toggleVisibility([resultInfos], "block")
    toggleVisibility([resultDiv], "block")
    convertTemperature()
  }
})

function submitInput(){
  if(userInput.value){
    toggleVisibility([h3Text, formDiv, userInputDiv], "none")
    toggleVisibility([resultInfos], "block")
    toggleVisibility([resultDiv], "block")
    convertTemperature()
  }
}

function clearUserInput(){
  userInput.value = ""
}

function returnFunc(){
  userInput.value = ""
  toggleVisibility([h3Text, formDiv], "block")
  toggleVisibility([resultInfos, resultDiv], "none")
  if(radioChecked){
    toggleVisibility([userInputDiv], "block")
  }
}
