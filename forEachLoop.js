// You can't use break or return a array
let fruits=['Apple','Jackfruit','Chikku'];
fruits.forEach(function(fruits,index){
console.log(index+':'+fruits);
});
let  numbers=[1,2,3]
numbers.forEach(num=>{
    console.log(num*2);
});
let n=[1,2,3]
let doubled=n.map((num)=>num*2);
console.log(doubled)

//converting map() to foreach()
let num=[1,2,3];
let doub=[]; //empty array
num.forEach((n1=>{
    doub.push(n*2) //n will be multiplied and pushed into doubled
}));
console.log(doub);


