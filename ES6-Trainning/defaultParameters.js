const input = {
    firstName: 'pham',
    lastName: 'cuong',
    a: 6,
    b: 9,
}

////////////////////////////Default parameter///////////////////////////
defaultParameter = (firstName = 'bean', lastName, fullName = firstName + lastName) =>{
    lastName = lastName || 'abc'; // lastName = (typeof lastName !== 'undefined') ?   lastName: "abc";
    return [firstName, lastName, fullName];
}

console.log(defaultParameter(input.firstName));
console.log(defaultParameter(input.firstName, input.lastName));


//typeof
typeOfParameter =(num = 1)=> {
    console.log(typeof num);
}
typeOfParameter(undefined);
typeOfParameter(2);
typeOfParameter('');

//function parameter
functionParameter =(speak = speaker() )=> {
    return speak;
}

speaker=()=>{
    return 'listen to music';
}
console.log("functionParameter:", functionParameter());
