const input = {
    firstName: 'pham',
    lastName: 'cuong',
    a: 6,
    b: 9,
}

////////////////////////////Default parameter///////////////////////////
function defaultParameter(firstName, lastName, fullName = firstName + lastName){
    lastName = lastName || 'abc'; // lastName = (typeof lastName !== 'undefined') ?   lastName: "abc";
    return [firstName, lastName, fullName];
}

console.log(defaultParameter(input.firstName));
console.log(defaultParameter(input.firstName, input.lastName));

////////////////////////////TemplateLiterals///////////////////////////
const {a,b} = input; //Destructuring assignment
console.log(`Fifteen is ${a+b}
and fifty four is ${a*b}`);
console.log(`a=b? ${a==b? 'true':'false'}`);

function tag(strings, ...value) {
    console.log(strings.raw[0]);
    console.log(value);
  }
tag `string text line 1 ${input.a} ${input.b} string text line 2`;

////////////////////////////Multi-line///////////////////////////
console.log(`first name = ${input.firstName}
last name = ${input.lastName}
=====>> full name = ${input.firstName + input.lastName}`);

////////////////////////////Destructuring assignment///////////////////////////
const [number1, number2, ...rest] = [10, 20, 30, 40, 50, 60, 70];
console.log('Destructuring:', rest);

///////////////////////Enhanced Object Literals///////////////////////
//object Variables
const n1 = 1, n2 = 2, n3 = 3;
  obj = {
    n1,
    n2,
};
obj.n3 = n3;
console.log(obj);

////method
const lib = {
    sum(a,b){return a+b; },
    mult(a,b){return a*b;}
}
console.log(lib.sum(1,2));