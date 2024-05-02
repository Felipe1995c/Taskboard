// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const addButton = document.getElementById("add-task-btn");
const form = document.getElementById("form");

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const timestamp = Date.now().toString(36); // Convert current timestamp to base36 string
    const randomStr = Math.random().toString(36).substring(2, 5); // Generate a random string
    return timestamp + randomStr; // Combine timestamp and random string
};
// const uniqueTaskId = generateTaskId();

// Todo: create a function to create a task card
function createTaskCard(task) {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card draggable droppable");
    taskCard.textContent = task.title;
    document.getElementById("container").append.child(taskCard);
};

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    $(".draggable").draggable();
};

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    const randomNumber = Math.random();
    //taskCard will target the div and add a class("card project ...ect") attempting to creat HTML to render on the page
    const taskCard = $('<div>')
        .addClass('card project-card draggable droppable my-3')
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
};

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
    event.preventDefault();
    //const deleteTask = .addEventListener("click", $( "#dialog" ).dialog('close'));

};


// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    event.preventDefault();
    $(".draggable").draggable();
    $(".droppable").droppable({
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
    renderTaskList();

    $(function () {
        $("#dialog").dialog({
            autoOpen: false,
            title: "Add New Task",
            buttons: {
                "Add Task": function (e) {
                    handleAddTask(e)
                    $(this).dialog("close")
                }
            }
        });
        $('#add-task-btn').click(function () {
            $("#dialog").dialog("open")
        })
        
    });
});
