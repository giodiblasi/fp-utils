let _ = require('ramda');
class IO {
    constructor(f) {
        this.unsafePerformIO = f;
    }

    static of(x) {
        return new IO(() => x);
    }
    map(f) {
        return new IO(_.compose(f, this.unsafePerformIO));
    }
    join() {
        var _this = this;
        return new IO(() => _this.unsafePerformIO().unsafePerformIO());
    }
}

module.exports=IO;