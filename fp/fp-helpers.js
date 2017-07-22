let _ = require('ramda');
class Container{
    constructor(x){
        this.__value=x;
    }

    static of(x){
        return new Container(x);
    }
}

class Functor extends Container{
    map(f){
        return this.of(f(this.__value));
    }
}



class Maybe extends Container{
    isNothing() {
        return (this.__value===null || this.__value===undefined);
    }

    map(f){
        return this.isNothing ? Maybe.of(null) 
                              : Maybe.of(f(this.__value));
    }
}

class Monad extends Maybe{
    join(){
        return this.isNothing() ? Maybe.of(null) 
                                : this.__value;
    }
}

let join = (mma) => mma.join();

let chain = f => m => m.map(f).join();

let maybe = (x) => (f) => (m) =>{
    return m.isNothing() ? x : f(m.__value);
}

class Left extends Container{
    map(f){
        return this;
    }
}

class Right extends Container{
    map(f){
        return Right.of(f(this.__value));
    }
}

let either = f => g => e =>{
    switch(e.constructor){
        case Left:
            return f(e.__value);
        case Right:
            return g(e.__value);
    }
}

class IO{
    constructor(f){
        this.unsafePerformIO = f;
    }

    static of(x){
        return new IO(()=>x);
    }
    map(f){
        return new IO(_.compose(f,this.unsafePerformIO));
    }
    join(){
        var _this=this;
        return new IO(()=>_this.unsafePerformIO().unsafePerformIO());
    }
}