const containerOf = require('./container');
const _ = require('ramda');



const  withFunctor = (container) => {
    return Object.assign({},container,{
        map : f => functorOf(f(container.__value)),
        chain: f => functorOf(f(container.__value)).join()
    });
};

const functorOf = _.compose(withFunctor,containerOf);

module.exports={functorOf,withFunctor};