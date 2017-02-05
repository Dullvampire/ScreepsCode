module.exports = function () {
    Object.prototype.extends = function (source) {
        for (let k in source) {
            if (!this.hasOwnProperty(k)) {
                this[k] = source[k]
            }
        }

        return this;
    };
}
