const inputField = document.querySelector(".input-field textarea"),
    todoList = document.querySelector(".todolists"),
    pendingNum = document.querySelector(".pending-num"),
    clearButton = document.querySelector(".clear-button");

function allTasks() {
    let tasks = document.querySelectorAll(".pending");
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

    let allLists = document.querySelectorAll(".list");
    if (allLists.length > 0) {
        todoList.style.marginTop = "20px"; // Corrected the property name
        clearButton.style.pointerEvents = "auto";
        return;
    }
    todoList.style.marginTop = "0px"; 
    clearButton.style.pointerEvents = "none";
}

inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim();

    if (e.key === "Enter" && inputVal.length > 0) {
        let liTag = `<li class="list pending" onclick="handleStatus(this)">
            <input type="checkbox">
            <span class="task">${inputVal}</span>
            <i class="uil uil-trash" onclick="deleteTask(event)"></i>
        </li>`;

        todoList.insertAdjacentHTML("beforeend", liTag);
        inputField.value = "";
        allTasks();
    }
});

function handleStatus(e) { // Corrected function name
    const checkbox = e.querySelector("input");
    checkbox.checked = !checkbox.checked;
    e.classList.toggle("pending");
    allTasks(); // Added parentheses to call the function
}

function deleteTask(e) { // Added event parameter
    e.target.parentElement.remove(); // Corrected parentElement and added parentheses
    allTasks(); // Added parentheses to call the function
}

clearButton.addEventListener("click", () => { // Added missing arrow function
    todoList.innerHTML = "";
    allTasks();
});