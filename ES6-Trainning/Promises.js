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

demoNormalPromise('pham','cuong')
.then((success => demoNormalPromise(success, 'cuong')))
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

let promiseAll = (firstName, fullName, country) =>{
    demoNormalPromise(firstName, fullName)
    .then(result => demoPromiseCountry(result, country))
    .then(success => console.log(`Promise All---> ${success}`))
    .catch(error => console.log('Error:' + error));
}
promiseAll('pham','cuong','Viet Nam');


///Async Await
let asynAwait = async () =>{
    let asyncAwaitPromise =  await demoNormalPromise('Son', 'Tung');
    console.log(asyncAwaitPromise);
    let asyncAwaitAllPromise = await demoPromiseCountry(asyncAwaitPromise, 'Viet Nam');
    console.log(asyncAwaitAllPromise);
}
asynAwait();