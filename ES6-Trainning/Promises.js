///////////////Normal Promises/////////////
let demoNormalPromise = (firstName, lastname) =>{
    return new Promise((resolve, reject) =>{
        setTimeout (() =>{
            if(firstName == '' || lastname == ''){
                reject('error!');
            }
            resolve(`${firstName} ${lastname}`);
        }, 1000);
    });
}

demoNormalPromise('react','redux')
.then((success => demoNormalPromise(success, 'trainning')))
.then(success => console.log(`full name = ${success}`))
.catch((error)=>console.log(`Error: ${error}`));


////////////////Promise all//////////////
let demoPromiseCountry = (name, country) =>{
    return new Promise((resolve, reject) =>{
        setTimeout (() =>{
            if(name == '' || country == ''){
                reject('error!name or age is empty.');
            }
            resolve(`full name: ${name} 
                    country: ${country}`);
        }, 2000);
    });
}

let promiseAll = Promise.all([demoNormalPromise('pham', 'cuong'), demoPromiseCountry('pham cuong', 'viet nam')]).then((result) =>console.log(`PromiseAll, ${result}`));

///Async Await
let asynAwait = async () =>{
    let asyncAwaitPromise =  await demoNormalPromise('Son', 'Tung');
    console.log(asyncAwaitPromise);
    let asyncAwaitAllPromise = await demoPromiseCountry(asyncAwaitPromise, 'Viet Nam');
    console.log(asyncAwaitAllPromise);
}
asynAwait();