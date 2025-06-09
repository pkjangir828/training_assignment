// let name = "World";
// function greet() {
//     console.log(`Hello, ${name}`);
// }
// greet();
// // console.log(name);
// console.log("`Hello, ${name}`");
// {
// const carName = ["TOYOTA", "BMW", "MERCEDES", "TESLA"];
// console.log(carName); 
// for (let i = 0; i<carName.length; i++) {
//     console.log(carName[i]);
// }
// carName[1]="Mahindra";
// console.log("\n",carName[1],"\n"); 
// for (let i =0;i<carName.length; i++) {
//     console.log(carName[i]);
// }
// This will print "Mahindra" because we modified the second element of the array
// for (let i=0, i< carName.length,i++){
//     console.log(carName[i]);
// }
// console.log(carName[1]);// This will throw an error because carName is not defined outside the block scope
// carName = "BMW"; // This will throw an error because carName is declared with const
// }
// carName.length
// {
// // const carName = "Toyota ";
// // let model = "Helux";
// // let complete_name 

// // console.log(carName);
// // // carName = "BMW"
// // complete_name = carName + " " + model// This will throw an error because carName is declared with const
// // console.log(complete_name);
// }
// console.log(carName); // This will throw an error because carName is not defined outside the block scope
// let x = 10;
// x>>=1;
// console.log(x); // This will print 20 because the left shift operator shifts the bits of x to the left by 1 position, effectively multiplying it by 2
// let x;       // Now x is undefined
// x = 67;
// let y= BigInt("90");     // Now x is a Number
// // x = "John";  

// console.log(typeof x);
// console.log(typeof y); // This will print "bigint" because y is a BigInt
fahrenheit = 77;
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius(77);
console.log(value); // This will print 25 because the function converts 77 degrees Fahrenheit to Celsius
console.log(typeof value); // This will print "number" because the return value of the function is a number