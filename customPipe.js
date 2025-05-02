function pipe(...fns) {
    return function (initialValue) {
      return fns.reduce((acc, fn) => fn(acc), initialValue);
    };
  }
  

const double = x => x*2;
const squared = x => x**2;

const piped = pipe(double,squared);
console.log(pipe(5))