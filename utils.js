module.exports = {
    parseFunction: function (s) {
        if (typeof s == 'string') {
            return require(s);
        } else if (typeof eval(s) == 'function') {
            return eval(s);
        }
    }
};
