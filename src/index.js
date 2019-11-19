document.addEventListener("DOMContentLoaded", () => {


  let form = document.getElementById("create-task-form")

  let tasks = document.getElementById("tasks")

  let counter = 0

  form.addEventListener("submit", function(event){
    event.preventDefault()
    let newTask = document.getElementById("new-task-description").value
    let li = document.createElement("li")
    let button = document.createElement("button")
    button.innerText = "delete"
    button.className = "delete"
    if (newTask.length > 0) {
      li.innerText = newTask
      li.id = counter + 1
      tasks.append(li)
      li.append(button)
      counter++
    }
    // new tasks added
    button.addEventListener("click", function(event){
      event.target.parentNode.remove()
    })
    // task delete functionality 
    
  })







});
