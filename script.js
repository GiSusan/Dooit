const textInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

function addTask() {
    if(textInput.value === '') {
        alert('Please enter a valid task');
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = textInput.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    textInput.value = "";
    saveTask();
}


taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask();
    }
}, false);

function saveTask() {
    localStorage.setItem("data", taskList.innerHTML);
}

function displayTasks() {
    taskList.innerHTML = localStorage.getItem("data");

    // Check and apply dark mode preference
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        document.documentElement.classList.add("dark-mode");
    }
}


displayTasks();
                                                           

function toggleDarkMode() {
    let bodyElement = document.body;
    let htmlElement = document.documentElement;

    if (bodyElement.classList.contains("dark-mode")) {
        bodyElement.classList.remove("dark-mode");
        htmlElement.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "false");
    } else {
        bodyElement.classList.add("dark-mode");
        htmlElement.classList.add("dark-mode");
        localStorage.setItem("darkMode", "true");
    }
}


document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);


