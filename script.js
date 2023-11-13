// Function to add a new task
function todoList() {
    // Get the input value
    var taskInput = document.getElementById('todoInput');
    var taskText = taskInput.value;

    // Check if the input is not empty
    if (taskText.trim() !== '') {
        // Create a new list item
        var listItem = document.createElement('li');
        listItem.innerHTML = '<span>' + taskText + '</span>' +
            '<div class="icons">' +
            '<div class="edit-icon-box"><i class="bi bi-pencil edit-icon"></i></div>' +
            '<div class="delete-icon-box"><i class="bi bi-trash delete-icon"></i></div>' +
            '</div>';

        // Add the new task to the list
        var list=document.querySelector('.list')
        list.style.display='block'
        var taskList = document.querySelector('.list ul');
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';

        // Add event listeners for edit and delete icons
        var editIcon = listItem.querySelector('.edit-icon');
        var deleteIcon = listItem.querySelector('.delete-icon');

        editIcon.addEventListener('click', function () {
            // Handle edit functionality
            var newText = prompt('Edit task:', taskText);
            if (newText !== null) {
                taskText = newText;
                listItem.querySelector('span').textContent = taskText;
            }
        });

        deleteIcon.addEventListener('click', function () {
            // Handle delete functionality
            taskList.removeChild(listItem);
            var listItems=taskList.getElementsByTagName('li')
            if(listItems.length == 0)
            {
            list.style.display='none'
            }
        });
    }
}