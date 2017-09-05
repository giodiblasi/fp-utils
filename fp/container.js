const containerOf = (value) => ({
    __value: value,
    join() {
        return this.__value;
    }
})
module.exports = containerOf;