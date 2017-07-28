let _ = require('ramda');
let Container=require('./fp/container');
let Functor = require('./fp/functor');
let mb=require('./fp/maybe');
let e=require('./fp/either');
let IO = require('./fp/IO');
let helpers=require('./fp/fp-helpers')

module.exports = {
    Container,
    Functor,
    Maybe:mb.Maybe,
    maybe:mb.maybe,
    Left:e.Left,
    Right:e.Right,
    IO,
    either:e.either,
    join:helpers.join,
    chain:helpers.chain,
    log:helpers.log,
    map:helpers.map
}


