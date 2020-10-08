const input = document.querySelector("input");
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const liNumber = document.getElementsByClassName("task");
const toDoList = []

const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1)
    taskNumber.textContent = liNumber.length;
    renderList()
}
const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    if (titleTask === "") return;
    const task = document.createElement("li")
    task.className = 'task';
    task.innerHTML = titleTask + "<button>Delete</button>"
    toDoList.push(task);
    renderList()

    ul.appendChild(task)
    input.value = ""
    taskNumber.textContent = liNumber.length
    task.querySelector("button").addEventListener("click", removeTask)
}


const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);

    })
}


form.addEventListener("submit", addTask);