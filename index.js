const submitBtn = document.getElementById("submitBtn")
const userInputDiv = document.getElementById("userInputDiv")
const resetBtn = document.getElementById("resetBtn")
let selectedOption = document.querySelector('input[name="option"]:checked');

function toggleVisibility(elements, display){
    elements.forEach(element => {
        element.style.display = display
    });
}
function showUserInput(){
    selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption){
        return
    }
    else{
        toggleVisibility([userInputDiv], "block")
    }
}
function hideUserInput(){
    selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption){
        toggleVisibility([userInputDiv], "none")
    }
}
