// Retrieve tasks and nextid from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
console.log("tasks line 2", taskList)
let nextid = JSON.parse(localStorage.getItem("nextid"));
const addButton = $("#add-task-btn");
const form = $("#form");

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const timestamp = Date.now().toString(36); // Convert current timestamp to base36 string
    const randomStr = Math.random().toString(36).substring(2, 5); // Generate a random string
    return timestamp + randomStr; // Combine timestamp and random string
};

// Todo: create a function to create a task card
function createTaskCard(task) {

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

    handleAddTask();
    return taskCard;
};


// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    const toDoEl = $("#todo-cards");
    console.log("renderTaskList", taskList);
    const inProgEl = $("#in-progress-cards");
    const doneEl = $("#done-cards");

    for (const task of taskList) {
        console.log(task);
        if (task.status === "to-do") {
            console.log(task.status)
            toDoEl.append(createTaskCard(task));
        } else if (task.status === "in-progress-cards") {
            inProgEl.append(createTaskCard(task));
        } else {
            doneEl.append(createTaskCard(task));
        }

    }
    // $()
    $(".draggable").draggable({
        accept: '.draggable'
    });
    return //without return the function goes on and on
};

// Todo: create a function to handle adding a new task
function handleAddTask(event) {

    if (taskList.length <= 0) {
        console.log("task list empty")

    }
    const title = $('#title-input').val();
    const date = $('#date-input').val();
    const description = $('#descript-input').val();
    const id = generateTaskId();
    const newTask = {
        title: title,
        status: "to-do",
        date: date,
        description: description,
        id: id,
    };
    console.log(newTask)
    console.log(taskList)
    taskList.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(taskList));

};



// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
    event.preventDefault();
    //add button to delete tasks that have been added

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

    //renderTaskList();
    printExistTaskList();
    form.on("submit", handleAddTask);
    $('#date-input').datepicker({
        changeMonth: true,
        changeYear: true,
    });

    $("#dialog").dialog({
        autoOpen: false,
        title: "Add New Task",
        buttons: {
            "Add Task": function (e) {
                createTaskCard(e)
                $(this).dialog("close")
            }
        }
    });
    $('#add-task-btn').click(function () {
        $("#dialog").dialog("open")

    })


});

function printExistTaskList() {

    for (const task of taskList) {
        console.log(task);
        if (task.status === "to-do") {
            const toDo = $("#todo-cards")
            console.log(toDo);
            $("#todo-cards").append(printCard(task));
        } else if (task.status === "in-progress-cards") {
            $("#in-progress-cards").append(printCard(task));
        } else {
            $("#done-cards").append(printCard(task));
        }

    }
};

function printCard(task) {
    const taskCard = $('<div>')
        .addClass('card project-card draggable droppable my-3')
        .attr('data-project-id', task.id);
    const cardHeader = $('<div>').addClass('card-header h4').text(task.title);
    const cardBody = $('<div>').addClass('card-body');
    const cardDescription = $('<p>').addClass('card-text').text(task.description);
    const cardDueDate = $('<p>').addClass('card-text').text(task.date);
    taskCard.append(cardHeader)
    taskCard.append(cardBody)
    cardBody.append(cardDescription)
    cardBody.append(cardDueDate)
    return (taskCard)
};