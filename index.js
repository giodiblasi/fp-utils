let fp = require('./fp/fp-helpers');
let _ = require('ramda');

var test=_.compose(console.log,fp.join,fp.log("Start stack"));
test(fp.Monad.of("Hello World"));

let gt= thr => account => account.amount > thr ? fp.Right.of(account) 
                                               : fp.Left.of(account)

var account={
    name: "jack",
    amount: 1
}

let print=message => x=>{console.log(message); return x;}

let classify = _.compose(fp.either(print("Poor"),print("Rich")),gt(5));
classify(account);