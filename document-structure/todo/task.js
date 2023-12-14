const tasksInput = document.querySelector('.tasks__input'); // Input user text area
const tasksAdd = document.querySelector('.tasks__add'); //Button
const tasksList = document.querySelector('.tasks__list'); //Total todo list

tasksAdd.onclick = (e) => {
    //get input user
    e.preventDefault();
    let newTask = tasksInput.value.trim();
    if (!newTask) {
        alert('Please enter the Task');
        return false
    };
    
    //create HTML elemenet div with classname - 'task'
    const addTask = document.createElement('div');
    addTask.classList.add('task');

    //add in creating div HTML code with text input and link for remove
    addTask.innerHTML += `
        <div class="task__title">
        ${newTask}
        </div>
        <a href="#" class="task__remove">&times;</a>
    `;
    //add new code in total todo list
    tasksList.append(addTask);

    //remove current element
    tasksList.addEventListener("click", (e) => {
        if (e.target.classList.contains("task__remove")) {
            e.target.parentElement.remove();
          }
    });

    tasksInput.value = '';
}