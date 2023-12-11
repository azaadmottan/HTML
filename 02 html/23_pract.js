function print(x, y, z)
{
    console.log("The value of a is "+ x);
    console.log("The value of b is "+ y);
    console.log("The value of c is "+ z);
}

function sum(x, y, z=6)             // here 6 is the default value of z  
{
    let d = x + y + z;
    return  d;                      // here d is local variable
}

let a = 2;
let b = 4; 
let c = 6;

print(a,b,c);
let d = sum(a,b,c);                 // here d is global variable

console.log("The sum of a, b & c is "+ d);