const submitBtn = document.getElementById("submitBtn")
const userInputDiv = document.getElementById("userInputDiv")
const resetBtn = document.getElementById("resetBtn")
const typeOfConversionText = document.getElementById("typeOfConversion")
let selectedOption = document.querySelector('input[name="option"]:checked')
let label = document.querySelector(`label[for="${selectedOption.id}"]`)

function toggleVisibility(elements, display){
    elements.forEach(element =>{
        element.style.display = display
    });
}

function showUserInput(){
    selectedOption = document.querySelector('input[name="option"]:checked')
    if(!selectedOption){
        return
    }
    else{
        toggleVisibility([userInputDiv], "block")
        typeOfConversionText.textContent += label.textContent
    }
}

function hideUserInput(){
    toggleVisibility([userInputDiv], "none")
}
