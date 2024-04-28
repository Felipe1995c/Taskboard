// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const timestamp = Date.now().toString(36); // Convert current timestamp to base36 string
    const randomStr = Math.random().toString(36).substring(2,5); // Generate a random string
    return timestamp + randomStr; // Combine timestamp and random string
}
const uniqueTaskId = generateTaskId();

// Todo: create a function to create a task card
function createTaskCard(task) {
const taskCard = document.createElement("div");
taskCard.classList.add("task-card");
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});


$( function() {
  $( "#dialog" ).dialog({
    autoOpen: false,
    title: "Add New Task",
    buttons: {
        "Add Task": function() {
            handleAddTask()
            $(this).dialog("close")
        }
    }
  });
  $('#add-task-btn').click(function(){
    $( "#dialog" ).dialog("open")
  })
} );
