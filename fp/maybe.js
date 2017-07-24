let Container = require('./Container');

class Maybe extends Container {
    isNothing() {
        return (this.__value === null || this.__value === undefined);
    }

    map(f) {
        return this.isNothing() ? Maybe.of(null)
            : Maybe.of(f(this.__value));
    }

    static of(x) {
        return new Maybe(x);
    }

    join(){
        return this.isNothing() ? Maybe.of(null) : this.__value;
    }
}

let maybe = (x) => (f) => (m) => {
    return m.isNothing() ? x : f(m.__value);
}

module.exports={
    Maybe,
    maybe
}