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

    static of(x){
        return new Functor(x);
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

    static of(x){
        return new Maybe(x);
    }
                            
}

 class Monad extends Maybe{
    join(){
        return this.isNothing() ? Maybe.of(null) 
                                : this.__value;
    }

    static of(x){
        return new Monad(x);
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

    static of(x){
        return new Left(x);
    }
    
}

 class Right extends Container{
    map(f){
        return Right.of(f(this.__value));
    }

     static of(x){
        return new Right(x);
    }
}

 let  either = (f , g) => e =>{
     
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

log= message => x =>{
    console.log(message, x);
    return x;
}

module.exports = {
    Container,
    Functor,
    Maybe,
    Left,
    Right,
    IO,
    either,
    join,
    chain,
    Monad,
    log
}