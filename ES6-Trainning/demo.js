//Demo arrow function and normal function
//Object Method
const person = {
    points: 23,
    score: function() {
        console.log("this normal function:", this); //object person
        this.points++;
        console.log(this.points); //24
    },
    count : ()=>{
        console.log("this Arrow function:",this); //{}
        this.points--; //it's understand whe using person.points // like create new object (person)
        console.log(this.points); //NaN
    }
}
person.score();
person.count();


//Arrow function click button
const button = document.querySelector('#pushy');
button.addEventListener('click', () => {
    console.log(this); 
    this.classList.toggle('on');
});

//normal function click button
const button = document.querySelector('#pushy');
button.addEventListener('click', function() {
    console.log(this);
    this.classList.toggle('on');
});

///Prototype
class Car {
    constructor(make, colour) {
        this.make = make;
        this.colour = colour;
    }
}

const beemer = new Car('BMW', 'blue');
const subie = new Car('Subaru', 'white');

Car.prototype.summarize = () => {
    return `This car is a ${this.make} in the colour ${this.colour}`;  
};

Car.prototype.summarize = function() {
    return `This car is a ${this.make} in the colour ${this.colour}`;  
};

//arguments /////

const orderChildren = () => {
    const children = Array.from(arguments);
    return children.map((child, i) => {
        return `${child} was child #${i + 1}`;
    })
    console.log(arguments);
}


const orderChildren = function() {
    const children = Array.from(arguments);
    return children.map((child, i) => {
        return `${child} was child #${i + 1}`;
    })
    console.log(arguments);
}

x = orderChildren(1, 123, 500, 115, 44, 88); //<=> arguments = [1, 123, 500, 115, 44, 88] = [...rest] 

///Asynchronous//////
console.log('1');
setTimeout(function afterTwoSeconds() {
  console.log('2');
}, 2000);
console.log('3');


////Asynchronous and callback////
function first(){
    console.log("function first!")
    setTimeout( function(){
      console.log("callback function first!");
    }, 500 );
  }
  
  function second(){
    console.log("function second!");
  }
  
  first();
  second();


///Callback////
function startWork(work, callback, callback2) {
    console.log(`Start to ${work}`);
    if(callback){
        console.log("callback1");
        if(callback2){
            console.log("callback2");
        }
    }
  }
  
  function call1() {
     console.log('call1 working!');
  }
  function call2() {
    console.log('call2 working!');
 }
  
  startWork('wash clothes', call1, call2);
