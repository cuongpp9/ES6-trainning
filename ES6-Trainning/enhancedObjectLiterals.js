///////////////////////Enhanced Object Literals///////////////////////
//Object Initialization From Variables
const n1 = 1, n2 = 2, n3 = 3;
  obj = {
    n1,
    n2,
    n3
};
console.log(obj);

//Object Method Definition Shorthand
const lib = {
    sum(a,b){return a+b; }, //es5 sum: function(a,b) {return a+b}
    mult(a,b){return a*b;}
}
console.log(lib.sum(1,2));

//Dynamic Property Keys
const
  key1 = 'one',
  obj = {
    [key1]: 1,
    two: 2,
    three: 3
  };