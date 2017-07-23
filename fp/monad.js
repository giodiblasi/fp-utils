let mb = require('./maybe');

class Monad extends mb.Maybe {
    join() {
        return this.isNothing() ? Maybe.of(null)
            : this.__value;
    }

    static of(x) {
        return new Monad(x);
    }
}

let join = (mma) => mma.join();
let chain = f => m => m.map(f).join();

module.exports={
    Monad,
    join,
    chain
}
