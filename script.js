let taskList = document.getElementById("taskList");

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerHTML = `
        ${taskText}
        <button onclick="this.parentElement.remove()">❌</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}
