module.exports = function () {
    Creep.prototype.assignTask = function (task) {
        task.creepId = this.id;
        this.memory.task = task;
    };

    Creep.prototype.performTask = function () {
        /*
        RETURN CODES:
            -1 - creep has no task
             0 - task performed nominally
             1 - task completed
        */
        if (!this.memory.task) { return false; }

        var utils = require('utils');

        var data = this.memory.task.data;

        if (!this.memory.initiated && !this.spawning) { //If not initiated then call the task's 'init' fucntion
            utils.parseFunction(this.memory.task.init)(this, data);
        }

        if (utils.parseFunction(this.memory.task.run)(this, data)) {
            utils.parseFunction(this.memory.task.callBack)(this, data);
            return 1;
        }

        return 0;
    };

    Creep.prototype.hasTask = function () {
        if (!creep.memory.task) {
            return false;
        }

        return true;
    };

    Object.defineProperty(Creep.prototype, 'task', {
        get: function task() {
            return this.memory.task;
        },

        set: function task(o) {
            var err = new Error('Can not set task directly');
            console.log(err.stack)
        }
    });
};
