const input = {
    firstName: 'pham',
    lastName: 'cuong',
    a: 6,
    b: 9,
}

////////////////////////////TemplateLiterals///////////////////////////

const sum = (a,b) => {return a+b};

//Multi-Line
console.log(`It is Multi-Line String
Using Teamplate Literals`);

//interpolation (noi suy)
const {a,b} = input; //Destructuring assignment
console.log(`Fifteen is ${sum(a,b)}
and fifty four is ${a*b}`);

//Nesting templates
console.log(`compare a and b ${a==b? true: (a>b? true:false)}`);

//Tagged templates
tag = (strings, ...value) =>{
    console.log(strings.raw[0]);
    console.log(value);
  }
tag `string text line 1 ${input.a} ${input.b} string text line 2`;