module.exports = {
    addTask: function (task) {
        Memory.tasks.push(task);
    },

    makeTaskAndAdd: function (init, run, score, callBack, priority, data) {
        this.addTask(this.makeTask(init, run, score, callBack, priority, data));
    },

    findBestJob: function (creep) {
        
    }

    makeTask: function (init, run, score, callBack, priority, data) {
        if (init == '' || init == undefined) {
            init = '(c, d) => undefined';
        }

        if (run == '' || run == undefined) {
            run = '(c, d) => undefined';
        }

        if (score == '' || score == undefined) {
            score = '(c) => 0';
        }

        if (callBack == '' || callBack == undefined) {
            callBack = '(c, d) => undefined';
        }

        if (!(typeof priority == Number) || priority == undefined) {
            priority = 0;
        }

        if (data == undefined) {
            data = {};
        }

        return {init: init,
                run: run,
                score: score,
                priority: priority,
                creepId: null,
                data: data};
    }
};
