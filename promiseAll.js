function promiseAll(promises){
    return new Promise((resolve,reject) => {
        const results = [];
        let completed = 0;
        promises.forEach((promise,index)=>{
            Promise.resolve(promise).then(value =>{
                results[index] = value;
                completed++;

                if(completed === promises.length){
                    resolve(results);
                }
            }

            ).catch(error => {
                reject(error);
            })
        })
    })
}


const promise1 = Promise.resolve(5);
const promise2 = Promise.resolve(10);
const promise3 = new Promise((resolve)=>{
    setTimeout(()=>resolve(300),1000);
})

promiseAll([promise1, promise2, promise3]).then(result => console.log(result)).catch(error => console.log(error));