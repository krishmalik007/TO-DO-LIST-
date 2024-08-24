document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('task-list');

        const li = document.createElement('li');
        li.className = 'list-group-item';

        const span = document.createElement('span');
        span.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn btn-link btn-remove';
        removeBtn.innerHTML = '&times;';
        removeBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = '';
    }
});

document.getElementById('search-btn').addEventListener('click', function() {
    const searchQuery = document.getElementById('search-input').value.trim().toLowerCase();
    const taskItems = document.querySelectorAll('#task-list .list-group-item');

    let found = false;

    taskItems.forEach(function(item) {
        const taskText = item.querySelector('span').textContent.toLowerCase();
        if (taskText.includes(searchQuery)) {
            item.style.display = '';
            found = true;
        } else {
            item.style.display = 'none';
        }
    });

    if (!found) {
        alert('No matching tasks found.');
    }
});
