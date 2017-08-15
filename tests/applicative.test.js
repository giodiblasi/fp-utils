let _ = require('ramda');
let assert = require('assert');
let app = require('../fp/applicative');
let Functor = require('../fp/functor');

describe('Applicative tests', function () {
    it('should apply wrapped method to wrapped value', function () {
        let appInc = app.Applicative.of((x)=>++x);
        let res=appInc.ap(Functor.of(4));
        assert.equal(res.__value, 5);
        assert.equal(res.constructor,Functor);
    });

     it('should apply wrapped method to wrapped value using helper', function () {
        let appInc = app.Applicative.of((x)=>++x);
        let res=app.ap(appInc)(Functor.of(4))
        assert.equal(res.__value, 5);
        assert.equal(res.constructor,Functor);
    });
});

