const input = {
    firstName: 'pham',
    lastName: 'cuong',
    a: 6,
    b: 9,
}

////////////////////////////Destructuring assignment///////////////////////////
const [number1, number2, ...rest] = [10, 20, 30, 40, 50, 60, 70];
console.log('Destructuring:', rest);


///ES6
const threeTimes = arrayNumber.map((x) => {
    console.log(x*3);
});


////////////Promises///////////////
const promises = new Promise((resolve, reject) =>{
    if (Math.random() * 1 < 90) {
        console.log('resolving the promise ...');
        resolve('Hello, Promises!');
    }
    reject(new Error('In 10% of the cases, I fail. Miserably.'));

});

