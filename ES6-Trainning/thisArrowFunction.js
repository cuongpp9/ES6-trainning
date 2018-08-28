// this.name = 'abc';
function arrowFunction (){
    const name = 'cuongpp';
    const thisFun = this;
    subArrowFunction = () =>{

        console.log(thisFun.name);
    }
    subArrowFunction();
}
arrowFunction();

const obj = {a:1 , b:2 , c:3 , d:4}
let copyObj = Object.assign({},obj, {c:5});
console.log("copyObj",copyObj);