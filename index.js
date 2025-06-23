const submitBtn = document.getElementById("submitBtn")
const userInputDiv = document.getElementById("userInputDiv")
const resetBtn = document.getElementById("resetBtn")
const typeOfConversionText = document.getElementById("typeOfConversion")
const radios = document.querySelectorAll(".option")
let label = document.querySelector(`label[for="${radio.id}"]`)



function toggleVisibility(elements, display){
    elements.forEach(element =>{
        element.style.display = display
    });
}

radios.forEach(input => {
  input.addEventListener("change", function () {
    if (this.checked) {
      const label = document.querySelector(`label[for="${this.id}"]`)
      toggleVisibility([userInputDiv], "block")
      typeOfConversionText.textContent = `Opção selecionada: ${label.textContent}`
    }
  });
});

function hideUserInput(){
    toggleVisibility([userInputDiv], "none")
}
