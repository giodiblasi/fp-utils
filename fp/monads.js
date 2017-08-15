const Container = require('./container');

class Monad extends Container{
    static of(x){
        return new Monad(x);
    }

    bind(f){
        return f(this.__value);
    }
}

const bind = f => monad=> monad.bind(f);

module.exports = {Monad,bind}