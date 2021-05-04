document.addEventListener("DOMContentLoaded", () => {
  const wholeDocument = document.querySelector("#main-content")
  console.log(wholeDocument)
  
  const sheep = document.getElementById("create-task-form");
  console.log (sheep);

  const myToDoList = document.getElementById("tasks")
  console.log(myToDoList)

  sheep.addEventListener("submit", function(iHateThis){
    iHateThis.preventDefault()
    console.log(iHateThis.target)

    const inputBox = document.getElementById("new-task-description").value;
  console.log(inputBox)

const listInput = document.createElement("li")
    listInput.textContent = inputBox
    
    myToDoList.appendChild(listInput)

    sheep.reset();
  })

});

