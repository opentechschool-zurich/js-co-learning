// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
// https://scotch.io/tutorials/javascript-promises-for-dummies
// https://www.youtube.com/watch?v=s6SH72uAn3Q


// 1.

// doSomething(function(result) {
//   doSomethingElse(result, function(newResult) {
//     doThirdThing(newResult, function(finalResult) {
//       console.log('Got the final result: ' + finalResult);
//     }, failureCallback);
//   }, failureCallback);
// }, failureCallback);

// 2.

// doSomething()
// .then(function(result) {
//   return doSomethingElse(result);
// })
// .then(function(newResult) {
//   return doThirdThing(newResult);
// })
// .then(function(finalResult) {
//   console.log('Got the final result: ' + finalResult);
// })
// .catch(failureCallback);

// 3.

// doSomething()
// .then(result => doSomethingElse(result))
// .then(newResult => doThirdThing(newResult))
// .then(finalResult => {
//   console.log(`Got the final result: ${finalResult}`);
// })
// .catch(failureCallback);


function summe(a, b) {
    return a + b;
}

console.log(summe(2, 3));

console.log('---');
console.log(' 1 ');
console.log('---');

// without promises

function division(a, b, nextTask, onFailure) {
    if (b != 0) {
        nextTask(a / b);
    } else {
        onFailure();
    }
}

function print(a, onFailure) {
    console.log(a);
}

failureCallback = function() { console.log('There was an error'); };

division(4, 0, function(result) {
    return print(result, failureCallback);
}, failureCallback);


console.log('---');
console.log(' 2 ');
console.log('---');

// "old style" promises

var division2 = function (a, b) {
    return new Promise(function(resolve, reject) {
        if (b != 0) {
             resolve(a / b);
        } else {
            var reason = new Error('division by zero');
            reject(reason);
        }
    });
}

var print2 = function(message) {
        console.log(message);
};

var failureCallback2 = function(error) {
    console.log(error.message);
}

division2(4, 0)
.then(function(result) {
    return print2(result);
})
.catch(function(error) {
    failureCallback2(error);
});

console.log('---');
console.log(' 3 ');
console.log('---');

// ES6 promises

division2(4, 2)
.then(result => print2(result))
.catch(failureCallback2);
