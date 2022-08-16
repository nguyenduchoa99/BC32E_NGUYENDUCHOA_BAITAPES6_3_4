export class TaskList {
    constructor() { }
    taskListDone = [];
    taskListUnfinished = [];
    check(task) {
        const checkTaskListDone = this.taskListDone.find(value => value.myTask === task.myTask);
        const checkTaskListUnfinished = this.taskListUnfinished.find(value => value.myTask === task.myTask);
        if (checkTaskListDone !== undefined || checkTaskListUnfinished !== undefined) {
            return true;
        };
    };
    addTask(task) {
        this.taskListUnfinished = [...this.taskListUnfinished, task];
    };
    removeTask(myTask) {
        this.taskListDone = this.taskListDone.filter(value => value.myTask !== myTask);
        this.taskListUnfinished = this.taskListUnfinished.filter(value => value.myTask !== myTask);
    };
    taskDone(myTask) {
        const taskDone = this.taskListUnfinished.find(value => value.myTask === myTask);
        const taskUnfinished = this.taskListDone.find(value => value.myTask === myTask);
        if (taskDone !== undefined) {
            this.taskListDone = [...this.taskListDone, taskDone];
            this.taskListUnfinished = this.taskListUnfinished.filter(value => value.myTask !== myTask);
        } else {
            this.taskListUnfinished = [...this.taskListUnfinished, taskUnfinished];
            this.taskListDone = this.taskListDone.filter(value => value.myTask !== myTask);
        };
    };
    sortAZUnfinished() {
        const arrUnfinished = [...this.taskListUnfinished];
        arrUnfinished.sort((a, b) => (a.myTask > b.myTask) ? 1 : -1);
        return arrUnfinished;
    };
    sortZAUnfinished() {
        const arrZAUnfinished = [...this.taskListUnfinished];
        arrZAUnfinished.sort((a, b) => (a.myTask > b.myTask) ? -1 : 1);
    };
    sortAZDone() {
        const arrDone = [...this.taskListDone];
        arrDone.sort((a, b) => (a.myTask > b.myTask) ? 1 : -1);
        return arrDone;
    };
    sortZADone() {
        const arrZADone = [...this.taskListDone];
        arrZADone.sort((a, b) => (a.myTask > b.myTask) ? -1: 1);
    };
}