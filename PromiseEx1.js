const delaySum=(x,y)=>
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const sum=x+y;
            resolve(sum);
        },500)
    });
    delaySum(3,7)
    .then(result=>{
        console.log("Sum is",result);//Logs sum is 10 after 500ms
        return delaySum(result,5);
    })
    .then(result2=>{
        //sum 5,after another 500ms
        console.log("Sum plus 5 is",result2);
    })
    .catch(error=>{
        console.error("Error occured",error)
    });