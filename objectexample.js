//object
//name,age,isStudent are key,Ram,47,true are values
let person={
    name:"Ram",
    age:47,
    isStudent:true};
console.log(person.name);
person.city="New York";
console.log(person.city);
delete person.isStudent; //deleted 
console.log(person.isStudent);



//printing the object
for(let key in person)
{
    console.log(key+':'+person[key]);
}
//obj using function
let user={
    name:'Alice',//
    greet:function()
    {
        console.log('Hai I am bob');
    }

};
user.greet()

// "this" key word uses
let user1={
    name:'Hari',//
    greet:function()
    {
        console.log('Hai I am '+this.name);
    }

};
user1.greet()