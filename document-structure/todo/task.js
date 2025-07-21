const input = document.getElementById('task__input');
const form = document.getElementById('tasks__form');
const tasks = document.getElementById('tasks__list');

form.addEventListener('submit', event => {
    event.preventDefault();
    const text = input.value;
    input.value = '';
    addTask(text);
})

function addTask(text) {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'task__title';
    titleDiv.textContent=text;

    const taskRemove= document.createElement('a');
    taskRemove.className= 'task__remove';
    taskRemove.textContent='x';
    taskRemove.href='#';
    taskRemove.addEventListener('click',event=>{
        event.preventDefault();
        taskDiv.remove();
    })
    taskDiv.appendChild(titleDiv);
     taskDiv.appendChild(taskRemove);
     tasks.appendChild(taskDiv);
}