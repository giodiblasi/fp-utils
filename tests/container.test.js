let _ = require('ramda');
let assert = require('assert');
let Container = require('../fp/container');

describe('Container tests', function () {
    it('contianer <of> tests', function () {
        let u = Container.of(5);
        assert.equal(u.__value, 5);
    });

    it('contianer <join> tests', function () {
        let u = Container.of(5);
        assert.equal(u.join(), 5);
    });
});