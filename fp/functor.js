let Container = require('./container');
class Functor extends Container {
    map(f) {
        return new this.constructor(f(this.__value));
    }

    chain(f){
        return  this.map(f).join();
    }

    static of(x) {
        return new Functor(x);
    }
}

module.exports=Functor;