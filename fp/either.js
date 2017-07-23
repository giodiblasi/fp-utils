let Container = require('./Container');
class Left extends Container {
    map(f) {
        return this;
    }

    static of(x) {
        return new Left(x);
    }

}

class Right extends Container {
    map(f) {
        return Right.of(f(this.__value));
    }

    static of(x) {
        return new Right(x);
    }
}

let either = (f, g) => e => {

    switch (e.constructor) {
        case Left:
            return f(e.__value);
        case Right:
            return g(e.__value);
    }
}

module.exports={
    Left,
    Right,
    either
}