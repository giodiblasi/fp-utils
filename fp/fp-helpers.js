let _ = require('ramda');
let Container=require('./container');
let Functor = require('./functor');
let mb=require('./maybe');
let e=require('./either');
let IO = require('./IO');


log = message => x => {
    console.log(message, x);
    return x;
}

let join = (mma) => mma.join();
let chain = f => m => m.map(f).join();

module.exports = {
    Container,
    Functor,
    Maybe:mb.Maybe,
    maybe:mb.maybe,
    Left:e.Left,
    Right:e.Right,
    IO,
    either:e.either,
    join,
    chain,
    log
}