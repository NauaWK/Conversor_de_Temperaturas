const submitBtn = document.getElementById("submitBtn")
const userInputDiv = document.getElementById("userInputDiv")
const selectedOption = document.querySelector('input[name="option"]:checked');

function toggleVisibility(elements, display){
    elements.forEach(element => {
        element.style.display = display
    });
}
function showUserInput(){
    if(!selectedOption){
        return
    }
    else{
        toggleVisibility([userInputDiv], "block")
    }
}