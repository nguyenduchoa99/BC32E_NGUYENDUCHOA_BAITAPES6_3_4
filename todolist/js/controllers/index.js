import { Task } from '../models/task.js'
import { TaskList } from '../models/taskList.js'

const getElement = (selector) => document.querySelector(selector);
const taskLisk = new TaskList();

const render = (arr, selector) => {
    const taskListRender = arr.reduce((value, task) => {
        return value += `
                     <li>
                        <span>${task.myTask}</span>
                        <div class="buttons">
                            <button class="remove" onclick = "removeTask('${task.myTask}')">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                            <button class="complete" onclick = "completedTask('${task.myTask}')">
                                <i class="far fa-check-circle"></i>
                                <i class="fas fa-check-circle"></i>
                            </button>
                        </div>
                    </li>`

    }, '');
    getElement(selector).innerHTML = taskListRender;
};

getElement('#addItem').onclick = () => {
    let newTask = getElement('#newTask').value;
    const task = new Task();
    task.myTask = newTask;
    if (taskLisk.check(task)) {
        getElement('#tbTask').innerHTML = '---Công việc đã có---';
        return;
    } else {
        getElement('#tbTask').innerHTML = '';
    };
    taskLisk.addTask(task);
    render(taskLisk.taskListDone, '#completed');
    render(taskLisk.taskListUnfinished, '#todo');
};

window.removeTask = (myTask) => {
    taskLisk.removeTask(myTask);
    render(taskLisk.taskListDone, '#completed');
    render(taskLisk.taskListUnfinished, '#todo');
};

window.completedTask = (myTask) => {
    taskLisk.taskDone(myTask);
    render(taskLisk.taskListDone, '#completed');
    render(taskLisk.taskListUnfinished, '#todo');
};

getElement('#two').onclick = () => {
    render(taskLisk.sortAZDone(), '#completed');
    render(taskLisk.sortAZUnfinished(), '#todo');
};

getElement('#three').onclick = () => {
    render(taskLisk.sortZADone(), '#completed');
    render(taskLisk.sortZAUnfinished(), '#todo');
};

getElement('#all').onclick = () => {
    render(taskLisk.taskListDone, '#completed');
    render(taskLisk.taskListUnfinished, '#todo');
};

getElement('#newTask').onkeydown = () => {
    getElement('#tbTask').innerHTML = '';
}
