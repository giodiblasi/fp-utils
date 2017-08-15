let _ = require('ramda');
let assert = require('assert');
let monads = require('../fp/monads');
let Container = require('../fp/container');

let Monad=monads.Monad;

let wrappingFunction = (value) => Monad.of(value+1);

describe('Monad tests', function () {
    it('should return flat value', function () {
        let monad=Monad.of(5);
        let res=monad.bind(wrappingFunction);
        assert.equal(res.__value, 6);
        assert.equal(res.constructor,Monad);
    });

    it('should return flat value using helper', function () {
        let monad=Monad.of(5);
        let res=monads.bind(wrappingFunction)(monad);
        assert.equal(res.__value, 6);
        assert.equal(res.constructor,Monad);
    });

    it('test chain of binds', function () {
        let monad = Monad.of(5);
        var res = monad.bind(wrappingFunction).bind(wrappingFunction);
        assert.equal(res.__value, 7);
        assert.equal(res.constructor,Monad);
    });



});

