function addTask() {

    // Get input box
    let input = document.getElementById("taskInput");

    // Get text entered
    let task = input.value;

    // Check if empty
    if (task === "") {
        alert("Please enter a task");
        return;
    }

    // Create new list item
    let li = document.createElement("li");

    // Add task text
    li.innerText = task;

    // Create delete button
    let deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";

    // Delete task
    deleteBtn.onclick = function () {
        li.remove();
    };

    // Add button to list item
    li.appendChild(deleteBtn);

    // Add list item to ul
    document.getElementById("taskList").appendChild(li);

    // Clear input box
    input.value = "";
}