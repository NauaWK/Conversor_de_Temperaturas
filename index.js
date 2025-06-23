const submitBtn = document.getElementById("submitBtn")
const userInputDiv = document.getElementById("userInputDiv")

function toggleVisibility(elements, display){
    elements.forEach(element => {
        element.style.display = display
    });
}
function showUserInput(){
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption){
        return
    }
    else{
        toggleVisibility([userInputDiv], "block")
    }
}