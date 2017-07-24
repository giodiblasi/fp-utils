let _ = require('ramda');
let assert = require('assert');
let IO = require('../fp/io');
describe('IO tests', function () {

    it('of method wrap value in function', function () {
        let u = IO.of(5);
        assert(u.unsafePerformIO(), 5);
    });

    it('map method composes methods', function () {
        let u = IO.of(5);
        let inc = x => x + 1;
        u=u.map(inc);
        assert(u.unsafePerformIO(), 6);
    });


});