
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText;
    span.onclick = function () {
        completeTask(this);
    };

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-btn";
    editButton.onclick = function () {
        editTask(this);
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function () {
        deleteTask(this);
    };

    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
    taskInput.focus();
}

function editTask(button) {
    const task = button.parentElement.querySelector(".task-text");
    const newTask = prompt("Edit your task:", task.textContent);

    if (newTask !== null && newTask.trim() !== "") {
        task.textContent = newTask.trim();
    } else if (newTask !== null) {
        alert("Task cannot be empty.");
    }
}

function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
}

function completeTask(task) {
    task.classList.toggle("completed");
}
