let _ = require('ramda');
let assert = require('assert');
let containerOf = require('../fp/container');

describe('Container tests', function () {
    it('contianer <of> tests', function () {
        let u = containerOf(5);
        assert.equal(u.__value, 5);
    });

    it('contianer <join> tests', function () {
        let u = containerOf(5);
        assert.equal(u.join(), 5);
    });
});