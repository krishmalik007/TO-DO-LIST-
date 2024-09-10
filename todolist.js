// Add a new task when the "Add" button is clicked
document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task'); // Get the task input field
    const taskText = taskInput.value.trim(); // Get and trim the input value

    if (taskText !== "") { // Ensure the task text is not empty
        const taskList = document.getElementById('task-list'); // Get the task list container

        const li = document.createElement('li'); // Create a new list item for the task
        li.className = 'list-group-item'; // Assign Bootstrap class for styling

        const span = document.createElement('span'); // Create a span to hold the task text
        span.textContent = taskText; // Set the text content of the span to the task text

        const removeBtn = document.createElement('button'); // Create a remove button
        removeBtn.className = 'btn btn-link btn-remove'; // Add Bootstrap classes for styling
        removeBtn.innerHTML = '&times;'; // Set the button content to '×'
        
        // Add an event listener to the remove button to delete the task when clicked
        removeBtn.addEventListener('click', function() {
            taskList.removeChild(li); // Remove the task item from the list
        });

        li.appendChild(span); // Add the span with the task text to the list item
        li.appendChild(removeBtn); // Add the remove button to the list item
        taskList.appendChild(li); // Append the list item to the task list

        taskInput.value = ''; // Clear the task input field after adding the task
    }
});

// Search functionality when the "Search" button is clicked
document.getElementById('search-btn').addEventListener('click', function() {
    const searchQuery = document.getElementById('search-input').value.trim().toLowerCase(); // Get and trim the search query
    const taskItems = document.querySelectorAll('#task-list .list-group-item'); // Get all the task items

    let found = false; // Initialize the found flag to false

    taskItems.forEach(function(item) {
        const taskText = item.querySelector('span').textContent.toLowerCase(); // Get the task text
        if (taskText.includes(searchQuery)) { // Check if the task text includes the search query
            item.style.display = ''; // Show the item if it matches
            found = true; // Set found flag to true if a match is found
        } else {
            item.style.display = 'none'; // Hide the item if it doesn't match
        }
    });

    if (!found) { // If no matching task was found, display an alert
        alert('No matching tasks found.');
    }
});
