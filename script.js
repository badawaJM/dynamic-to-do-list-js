document.addEventListener('DOMContentLoaded', function() {
    // Select the DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();  // Retrieve and trim the value of the input field

        // Check if the task input is empty
        if (taskText === "") {
            alert("Please enter a task.");  // Alert the user if the input is empty
            return;
        }

        // Create a new list item (li) for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Add an event listener to the remove button to delete the task
        removeButton.onclick = function() {
            taskList.removeChild(li);  // Remove the list item from the task list
        };

        // Append the remove button to the list item
        li.appendChild(removeButton);

        // Append the list item to the task list (ul)
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = "";
    }

    // Add event listener to add a task when the "Add Task" button is clicked
    addButton.addEventListener('click', function() {
        addTask();  // Call the addTask function
    });

    // Add event listener to allow adding a task by pressing the "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();  // Call the addTask function if the "Enter" key is pressed
        }
    });
});
