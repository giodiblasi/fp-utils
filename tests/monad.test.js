let _ = require('ramda');
let assert = require('assert');
let monads = require('../fp/monads');
let Container = require('../fp/container');

let wrappingFunction = (value) => Container.of(value+1);

describe('Monad tests', function () {
    it('should return flat value', function () {
        let monad=monads.Monad.of(5);
        let res=monad.bind(wrappingFunction);
        assert.equal(res.__value, 6);
        assert.equal(res.constructor,Container);
    });

    it('should return flat value using helper', function () {
        let monad=monads.Monad.of(5);
        let res=monads.bind(wrappingFunction)(monad);
        assert.equal(res.__value, 6);
        assert.equal(res.constructor,Container);
    });
});

