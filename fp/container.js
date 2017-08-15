class Container {
    constructor(x) {
        this.__value = x;
    }

    join(){
        return this.__value;
    }
    
    static of(x) {
        return new Container(x);
    }
}

module.exports = Container;