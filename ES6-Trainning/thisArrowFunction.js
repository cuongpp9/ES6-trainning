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