class Container {
    constructor(x) {
        this.__value = x;
    }

    static of(x) {
        return new Container(x);
    }
}

module.exports = Container;