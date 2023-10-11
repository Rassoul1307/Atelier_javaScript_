function division(a,b) {
    return new Promise((resolve,reject)=>{
        if (typeof a !== 'number' || typeof b!== 'number' || b == 0) reject('Division impossible');
        resolve(`${a} divisé par ${b} est egale ${a / b}`);
    })
}
division(10,5).then(res=>{
    console.log(res)
}).catch(err => {
    console.error(err);
});



function addition(a,b) {
    return new Promise((resolve,reject)=>{
        if (typeof a !== 'number' || typeof b!== 'number') reject('Addition impossible');
        resolve(`${a} + ${b} est egale ${a + b}`);
    })
}
addition(10,5).then(res=>{
    console.log(res)
}).catch(err => {
    console.error(err);
});


function multiplication(a,b) {
    return new Promise((resolve,reject)=>{
        if (typeof a !== 'number' || typeof b!== 'number') reject('Multiplication impossible');
        resolve(`${a} multiplié ${b} est egale ${a * b}`);
    })
}
multiplication(10,5).then(res=>{
    console.log(res)
}).catch(err => {
    console.error(err);
});



function soustraction(a,b) {
    return new Promise((resolve,reject)=>{
        if (typeof a !== 'number' || typeof b!== 'number') reject('soustraction impossible');
        resolve(`${a} - ${b} est egale ${a - b}`);
    })
}
soustraction(10,5).then(res=>{
    console.log(res)
}).catch(err => {
    console.error(err);
});


function modulo(a,b) {
    return new Promise((resolve,reject)=>{
        if (typeof a !== 'number' || typeof b!== 'number') reject('soustraction impossible');
        resolve(`Le modulo de ${a} sur ${b} est egale ${a % b}`);
    })
}
modulo(10,5).then(res=>{
    console.log(res)
}).catch(err => {
    console.error(err);
});