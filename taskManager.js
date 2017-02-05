module.exports = {
    addTask: function (task) {
        task.extends(require('task.prototype'));

        task.id = Memory.currentTaskNumber;

        Memory.currentTaskNumber ++;

        tasks[task.id] = task;
    }
}
