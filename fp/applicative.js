const containerOf = require('./container');
const _ = require('ramda');

const withApplicative = (container) => {
    return Object.assign({}, container, {
        ap : (functor) => {
            return functor.map(this.__value); 
        }
    });
}
const applicativeOf = _.compose(withApplicative,containerOf);

const ap = app =>  functor => app.ap(functor);

module.exports = {applicativeOf, withApplicative, ap};