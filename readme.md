## Functional Progamming Util (Very Experimental) ##

this repo contain class and helper to support functional programming

Current version  implements:
+ Functor
+ Monad
+ Either
+ Maybe
+ IO
+ Applicative

Here some example (you can see more use cases in [tests](https://github.com/giodiblasi/fp-utils/tree/master/tests))
#### Functor Example:
```javascript
let u = Functor.of(5);
let inc = (value)=>value+1;
var res = u.map(inc).join();  // 6
```

#### Maybe Example:
```javascript
let u = Maybe.of(5);
var inc = x => x + 1;
u.map(inc) // => Maybe.of(6)

let u = Maybe.of(undefined);
var inc = x => x + 1;
u.map(inc) // => Maybe.of(undefined) 
```

#### Either Example:
```javascript
let el = e.Left.of(5);
let er = e.Right.of(5);
var l = x => x + 1;
var r = x => x + 2;
either(l,r)(el); //=>6;
either(l,r)(er); //=>7;
```

#### Monad Example:
```javascript
let wrappingFunction = (value) => Monad.of(value+1);
let monad=Monad.of(5);
let res=monad.bind(wrappingFunction); //=> Monad.of(6)
```

#### Applicative Example:
```javascript
let appInc = Applicative.of((x)=>++x);
let res=appInc.ap(Functor.of(4)); // => Functor.of(5)
```

test command :
```javascript
> npm test
```
