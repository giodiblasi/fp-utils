let _ = require('ramda');
let assert = require('assert');
let e = require('../fp/either');
let fp=require('../fp/fp-helpers');

describe('Either tests', function () {
    it('Should execute left function', function () {
        let u = e.Left.of(5);
        var l = x => x + 1;
        var r = x => x + 2;
        var testMethod=(_.compose(e.either(l,r),u=>u));
        assert.equal(testMethod(u), 6);
    });

     it('Should execute right function', function () {
        let u = e.Right.of(5);
        var l = x => x + 1;
        var r = x => x + 2;
        var testMethod=(_.compose(e.either(l,r),u=>u));
        assert.equal(testMethod(u), 7);
    });
});