let _ = require('ramda');
let assert = require('assert');
let app = require('../fp/applicative');
let {functorOf} = require('../fp/functor');

describe('Applicative tests', function () {
    it('should apply wrapped method to wrapped value', function () {
        let appInc = app.applicativeOf((x)=>++x);
        let res=appInc.ap(functorOf(4));
        assert.equal(res.__value, 5);
    });

     it('should apply wrapped method to wrapped value using helper', function () {
        let appInc = app.applicativeOf((x)=>++x);
        let res=app.ap(appInc)(functorOf(4))
        assert.equal(res.__value, 5);
    });
});

