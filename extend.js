module.exports = function () {
    Object.prototype.extends = function (source) {
        for (var k in source) {
            if (!this.hasOwnProperty(k)) {
                this[k] = source[k];
            }
        }

        return this;
    };
};
