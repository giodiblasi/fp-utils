let _ = require('ramda');
let assert = require('assert');
let m = require('../fp/maybe');


describe('Maybe tests', function () {
    it('Should execute function', function () {
        let u = m.Maybe.of(5);
        var inc = x => x + 1;
        assert.equal(u.map(inc).__value, 6);
    });

     it('Should not execute function', function () {
        let u = m.Maybe.of(null)
        var inc = x => x + 1;
        assert.equal(u.map(inc).__value, null);
    });
});