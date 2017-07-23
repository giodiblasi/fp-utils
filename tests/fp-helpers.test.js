let _ = require('ramda');
let assert = require('assert');
let fp = require('../fp/fp-helpers');

describe('Functor tests', function () {
    it('functor composition property', function () {
        let u = fp.Functor.of(5);
        let f = x => x + 10;
        let g = x => x * 2;
        let u1 = u.map(_.compose(f, g));
        let u2 = u.map(g).map(f);
        assert.equal(u1.__value, u2.__value);
    });

    it('functor identity property', function () {
        let u = fp.Functor.of(5);
        let id = x => x;
        let u1 = u.map(id);
        assert.equal(u1.__value, u.__value);
    });
});