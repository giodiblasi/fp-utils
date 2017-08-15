let _ = require('ramda');
let assert = require('assert');
let m = require('../fp/maybe');
let h= require ('../fp/fp-helpers');
describe('Helper tests', function () {
    
    it('should get contained value using join helper',function(){
        let u=m.Maybe.of(5);
        assert(h.join(u),5);
    });

    it('should get contained value using chain helper',function(){
        let u=m.Maybe.of(5);
        let inc = x => x+1;
        assert(h.chain(inc)(u),6);
    });

    it('should get contained value using map helper',function(){
        let u=m.Maybe.of(5);
        let inc = x => x+1;
        assert(h.map(inc)(u).__value,6);
    });
});