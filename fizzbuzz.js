for ( let m=1;m<=20;m++)
{
    if (m%3==0 && m%5==0){
        console.log("Fizz Buzz");
    }
    else if (m%5==0){
        console.log("buzz");
    }
    else if(m%3==0){
        console.log("fizz");
        
    }
    else{
        console.log(m);
    }
}