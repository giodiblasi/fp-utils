let _ = require('ramda');
let Container=require('./container');
let Functor = require('./functor');
let mb=require('./maybe');
let e=require('./either');
let IO = require('./IO');
let monad=require('./monad');

log = message => x => {
    console.log(message, x);
    return x;
}

module.exports = {
    Container,
    Functor,
    Maybe:mb.Maybe,
    maybe:mb.maybe,
    Left:e.Left,
    Right:e.Right,
    IO,
    either:e.either,
    join:monad.join,
    chain:monad.chain,
    Monad:monad.Monad,
    log
}