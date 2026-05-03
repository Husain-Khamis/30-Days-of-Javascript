const errorMessage = document.querySelector("#error-message");
let draggedId = null;

let tasksArr = []

function addTask() {
    const taskInput = document.getElementById("input-task");
    const task = taskInput.value;

    if (task.length === 0){
        errorMessage.textContent = "Error, Empty Task";
        errorMessage.style.display = 'block';
        return;
    }
    tasksArr.push({ id: Date.now(), taskName: task, status: "Active"});
    errorMessage.style.display = "none";
    renderTasks(tasksArr);
    taskInput.value = "";
    localStore();
}

function renderTasks(arr = tasksArr) {
    const cards = document.querySelector("#task-list");
    cards.innerHTML = "";
    if (arr.length === 0){
        document.getElementById("remaining-tasks").innerText = "0 Tasks Remaining!";
        errorMessage.textContent = "Add a Task!";
        errorMessage.style.display = 'block';
        return;
    }
    errorMessage.style.display = 'none';

    for (let i = 0; i < arr.length; i++) {

        const taskCard = document.createElement("div");
        taskCard.className = "card";

        const textGroup = document.createElement("div");
        textGroup.className = "text-group"

        const taskName = document.createElement("p");
        taskName.innerText = `${arr[i].taskName}`;

        const status = document.createElement("p");
        status.innerText = `${arr[i].status}`;

        const checkbox = document.createElement("input");
        checkbox.className = "buttons";
        checkbox.type = "checkbox";
        checkbox.dataset.id = arr[i].id;

        const editBtn = document.createElement("button");
        editBtn.innerText = "✏️"
        editBtn.className = "buttons";
        editBtn.type = "button"

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "🗑️"
        deleteBtn.className = "buttons";
        deleteBtn.type = "button";

        if (arr[i].status === "Active"){
            taskCard.style.backgroundColor = "#600028";
        } else {
            taskCard.style.backgroundColor = "#370017";
            taskCard.style.opacity = "0.6";
        }

        deleteBtn.dataset.id = arr[i].id;
        deleteBtn.addEventListener("click", function() {
            deleteTask(this.dataset.id)
        })

        checkbox.dataset.id = arr[i].id;
        checkbox.addEventListener("click", function() {
            toggleComplete(this.dataset.id)
        })

        editBtn.dataset.id = arr[i].id;
        editBtn.addEventListener("click", function() {
            editTask(this.dataset.id)
        })

        taskCard.draggable = true;
        taskCard.dataset.id = arr[i].id;

        taskCard.addEventListener("dragstart", function() {
            draggedId = this.dataset.id
        })
        
        taskCard.addEventListener("dragover", function(e) {
            e.preventDefault()
        })

        taskCard.addEventListener("drop", function() {
            const targetId = Number(this.dataset.id);
            const draggedIndex = tasksArr.findIndex(t => t.id === Number(draggedId));
            const targetIndex = tasksArr.findIndex(t => t.id === targetId);

            const temp = tasksArr[draggedIndex];
            tasksArr[draggedIndex] = tasksArr[targetIndex];
            tasksArr[targetIndex] = temp;

            renderTasks()
            localStore()
        })

        textGroup.appendChild(taskName);
        textGroup.appendChild(status);
        taskCard.appendChild(textGroup);
        taskCard.appendChild(checkbox);
        taskCard.appendChild(editBtn);
        taskCard.appendChild(deleteBtn);
        cards.appendChild(taskCard);

    }
    const remaining = arr.filter(task => task.status === "Active").length;
    document.getElementById("remaining-tasks").innerText = `${remaining} Tasks Remaining!`;
}

function deleteTask(id) {
    tasksArr = tasksArr.filter(task => task.id !== Number(id));
    renderTasks();
    localStore();
}

function toggleComplete(id) {
    tasksArr = tasksArr.map(task => {
        if (task.id === Number(id)) {
            task.status = task.status === "Active" ? "Completed" : "Active"
        }
        return task;
    })
    renderTasks();
    localStore();
}

function editTask(id) {
    const newTask = prompt("Edit Your Task:");
    if (newTask === null || newTask.length === 0) return;
    tasksArr = tasksArr.map(task => {
        if (task.id === Number(id)) {
            task.taskName = newTask
        }
        return task;
    })
    renderTasks();
    localStore();
}

function localStore() {
    localStorage.setItem("tasks", JSON.stringify(tasksArr));
}

function loadStorage() {
    const storage = localStorage.getItem("tasks");
    if (storage) {
        tasksArr = JSON.parse(storage);
        renderTasks();
    }
}

function filterTasks(filter) {
    const filtered = tasksArr.filter( task => {
        if (filter === "all") return true;
        if (filter === "active") return task.status === "Active"
        if (filter === "completed") return task.status === "Completed"
    })
    renderTasks(filtered);
}

function clearCompleted() {
    tasksArr = tasksArr.filter(task => task.status !== "Completed");
    renderTasks();
    localStore();
}

document.querySelectorAll('input[name="filter"]').forEach(radio => {
    radio.addEventListener("change", function() {
        filterTasks(this.value);
    })
})

document.getElementById("task-form").addEventListener("submit", function(e) {
    e.preventDefault()
    addTask()
})

document.getElementById("clear-task").addEventListener("click", clearCompleted)

loadStorage();