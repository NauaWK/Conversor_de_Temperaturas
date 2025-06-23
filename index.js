const submitBtn = document.getElementById("submitBtn")
const userInputDiv = document.getElementById("userInputDiv")
const resetBtn = document.getElementById("resetBtn")
const typeOfConversionText = document.getElementById("typeOfConversion")
let label = document.querySelector(`label[for="${radio.id}"]`)


function toggleVisibility(elements, display){
    elements.forEach(element =>{
        element.style.display = display
    });
}

function showUserInput(){
    const radios = document.querySelectorAll(".option")
    radios.forEach(input => {
            input.addEventListener("change", function(){
            if(this.checked){
                const label = document.querySelector(`label[for="${this.id}"]`)
                toggleVisibility([userInputDiv], "block")
                typeOfConversionText.textContent = `Opção selecionada: ${label.textContent}`
            }
        })  
    })
}

function hideUserInput(){
    toggleVisibility([userInputDiv], "none")
}
