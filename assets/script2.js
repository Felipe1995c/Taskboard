// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const randomNumber = Math.random();
    //taskCard will target the div and add a class("card project ...ect") attempting to creat HTML to render on the page
    const taskCard = $('<div>')
        .addClass('card project-card draggable my-3')
        .attr('data-project-id', randomNumber);  //generate random number .val() uses JQUery to target the value of inputs
    const cardHeader = $('<div>').addClass('card-header h4').text($('#title-input').val());
    const cardBody = $('<div>').addClass('card-body');
    const cardDescription = $('<p>').addClass('card-text').text($('#descript-input').val());
    const cardDueDate = $('<p>').addClass('card-text').text($('#date-input').val());
    const cardDeleteBtn = $('<button>')
        .addClass('btn btn-danger delete')
        .text('Delete')
        .attr('data-project-id', randomNumber); //generate random number
    cardDeleteBtn.on('click', handleDeleteTask);
    taskCard.append(cardHeader)
    taskCard.append(cardBody)
    cardBody.append(cardDescription)
    cardBody.append(cardDueDate)
    $('#todo-cards').append(taskCard)
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
event.preventDefault();

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    event.preventDefault();
    $("#draggable").draggable();
    $("#droppable").droppable({
        drop: function (event, ui) {
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("Dropped!");
        }
    });
};

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    function runCode(){
        var td=new Todo()
        td.addTask("Hello World")
        td.addTask("Great News")
        td.printList()
        }
});
