let Container=require('./fp/container');
let Functor = require('./fp/functor');
let mb=require('./fp/maybe');
let e=require('./fp/either');
let IO = require('./fp/IO');
let helpers=require('./fp/fp-helpers');
let Applicative = require('./fp/applicative');
let monads = require('./fp/monads');

module.exports = {
    Container,
    Functor,
    Maybe:mb.Maybe,
    maybe:mb.maybe,
    Left:e.Left,
    Right:e.Right,
    IO,
    either:e.either,
    eitherPromise: e.eitherPromise,
    join:helpers.join,
    chain:helpers.chain,
    log:helpers.log,
    map:helpers.map,
    Applicative:Applicative.Applicative,
    ap:Applicative.ap,
    Monad:monads.Monad,
    bind: monads.bind
}
