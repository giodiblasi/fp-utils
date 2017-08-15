let _ = require('ramda');
let Container=require('./container');
let Functor = require('./functor');
let mb=require('./maybe');
let e=require('./either');
let IO = require('./IO');


log = message => x => {
    console.log(message, x);
    return x;
}

let join = (mma) => mma.join();
let chain = f => m => m.map(f).join();
let map= f=> m => m.map(f); 
module.exports={
    log,
    join,
    chain,
    map
}