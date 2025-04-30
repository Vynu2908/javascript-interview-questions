function customPromiseRace (promises){
    return new Promise ((resolve,reject) => {
        promises.forEach((promise)=> {
            Promise.resolve(promise).then(resolve,reject);
        })
    })
}

const promise1 = Promise.reject(250);
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve(100),1000);
})
customPromiseRace([promise1,promise2]).then(result => console.log(result)).catch(error => console.log(error));