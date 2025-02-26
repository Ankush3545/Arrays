//1. What is an array in js and how do you declare array in js
//Array in Java script is a Data Structure that allows you to store multiple value in single Variable
//Declaration of Array 1.using Array literal notation and constructor

let fruits=["Apple","Banana","Mango","Orange"];// using Array literal notation
let items=new Array("Chocalate","Chips","Biscuit");// using constructor

//2. How to acces element of an array
//Arrays can be accesed using index value
console.log(fruits[1]);
console.log(fruits[3]);
console.log(items[2]);

//3.How can you add element in an array
// using push(),using unshift()
fruits.push("Litchi");
console.log(fruits)
items.unshift("Brownie");
console.log(items)

//4.How can you remove element from an array
// using pop() and shift()

fruits.pop();
console.log(fruits);
items.shift();
console.log(items);

//5.What is length property of an array
// returns the number of element in an array it is a dyanamic propert that is update automatically on change on array

console.log(fruits.length);
console.log(items.length)

//6. How to check if a variable is an array
// to check we can use Array.isArray method
console.log(Array.isArray(fruits));
console.log(Array.isArray(items));

//7.How do you iterate over an array
// using a for loop we can iterate over an array
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}
for(let j=0;j<items.length;j++){
    console.log(items[j])
}

//8.How do you use the forEach method
//it is a higher order function method it takes another function as argument
// it can iterate for each item of an array and makes the expression easier

fruits.forEach((fruit)=>console.log(fruit));
items.forEach((item)=>{console.log(item)});

//9. Difference between for of and for in loop in an array
// for of loop iterate the value of an array while for in loop iterates key (index) of an array

//10.How do you concatenate two array
// using concat()
const newFruits=fruits.concat(items);
console.log(newFruits)
const newfruits2=items.concat(fruits);
console.log(newfruits2);

//11.Explain the map() method and provide example
// map method creates a new array  populated with the result of calling a provided function
// map method is often used for data transformation task such as cube root of an array

//12. How filter() method work
//Filter method creates a new array with all element that pass the text implemented by the provided function
// filter method does not modify the original array

let numbers=[1,2,3,4,5,6,7,8]
let EvenNumbers=numbers.filter((num)=>num%2===0)
console.log(EvenNumbers);

//13.Describe the reduce() method with example
// reduce method reduce the complete array into single output value
// it is basically find sum, average ,etc.

let sum=numbers.reduce((accumulator, currentValue) => accumulator + currentValue,0)
console.log(sum);

//14.What is the purpose  of the find() method
//find() method returns the first element of an array that fulfill  the providing testing function
let findNumber=numbers.find((num)=>num>6);
console.log(findNumber)

//.15 What is some() method
// some() method test atleast one element in an array satisfies the providing  function
// it returns boolean value that is true or false
const someEven=numbers.some((num)=>num%2===0);
console.log(someEven)

//16.Every() method with an example
// it checks all element in array satiesfies the provinding function
// it also return boolean value that is true or false

const EveryEven=numbers.every((num)=>num%2 === 0)
console.log(EveryEven);

//17.What does include() method does
// include method determine whether an array includes a certain value among enteries
// it is helpful for checking presence of element in an array

//18.How do you use indexOf() method
// returns the first index at which a given element found in an array
console.log(fruits.indexOf("Mango"));

//19. What is Slice() method used for
// slice method is used for obtaining a piece of elements from an array
// it returns a shallow copy of an array into an new array object select from start to end and end is not include

let cities=["Noida","Delhi","Pune","jaipur","Goa"]
let newCities=cities.slice(1,3);
console.log(newCities);

//20. Explain splice() method
// it can changes the element of an array by removing or replacing existing element
const States=["Haryana","Delhi","UP","Mp","Mumbai"]
States.splice(1,2,"Sikar","Khatu");
console.log(States); 