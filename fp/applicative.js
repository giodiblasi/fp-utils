const Container = require('./container');

class Applicative extends Container{
   static of(x) {
        return new Applicative(x);
    }

    ap(functor){        
       return functor.map(this.__value);
    }
}

let ap = app =>  functor => app.ap(functor);

module.exports = {Applicative,ap};