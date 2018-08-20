////////////////////////////Destructuring assignment///////////////////////////
///Array destructuring////////

//basic
var foo = ['one', 'two', 'three'];
var [one, two, three] = foo;
console.log(one); 
console.log(two); 
console.log(three);

//using variable
var num1, num2;
[num1, num2] = [1, 2];
console.log(num1);
console.log(num2);

//default values
var value1, value2;
[value1=5, value2=7] = [1];
console.log(value1);
console.log(value2);

////swap values
var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a);
console.log(b); 

//parsing value from function
function f() {
    return [1, 2, 3];
  }
  var a, b; 
  [a , , b] = f(); 
  console.log(a); 
  console.log(b);

  //Rest array
const [number1, number2, ...rest] = [10, 20, 30, 40, 50, 60, 70];
console.log('Destructuring:', rest);

//Object destructuring///////////////
///basic
var o = {p: 42, q: true};
var {p, q} = o;
console.log(p); 
console.log(q);

//new variable names
var o = {p: 42, q: true};
var {p: foo, q: bar} = o;
 
console.log(foo);
console.log(bar); 

//Default values
var {a = 10, b = 5} = {a: 3};

console.log(a);
console.log(b);

//new variables names and providing default values
var {a:aa = 10, b:bb = 5} = {a: 3};
console.log(aa);
console.log(bb);

//Rest in Object Destructuring
let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}

//for and destructuring
var people = [
    {
      name: 'Mike Smith',
      family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
        sister: 'Samantha Smith'
      },
      age: 35
    },
    {
      name: 'Tom Jones',
      family: {
        mother: 'Norah Jones',
        father: 'Richard Jones',
        brother: 'Howard Jones'
      },
      age: 25
    }
  ];
  
  for (var {name: n, family: {father: f}} of people) {
    console.log('Name: ' + n + ', Father: ' + f);
  }