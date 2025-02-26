//1.How do you use the join() method in array
//Join() method creates and returns a string by concatenating all the elements in an array seperated by comma,semicolon,etc
let items=["Apple","Litchi","Chips","Chocolate"];
let itemsString=items.join(" , ");
console.log(items)
console.log(itemsString);

//2.What is Array destructuring and how it works
//it provides a way to extract multiple elements from an array and asign them to a single variable
let fruits=["Apple","Mango","Banana","Grapes","WaterMelon"];
let[first,second,third,forth,fifth]=fruits;
console.log(first);
console.log(second);
let[firstFruit,secondFruit,thirdFruit,forthFruit]=fruits;
console.log(forthFruit);

//3. How do you copy an array
// using spread operator that is ... or array.from() both creates a shallow copy of the original array
let city=["Delhi","Faridabad","CyberCity","Jaipur","Sikar"];
let cityCopies=[...city];
console.log(cityCopies);
//by using Array.from() method
let cityCopies2=Array.from(city);
console.log(cityCopies2)

//4.Array flat() method
// it creates a new array with all sub-array elements concatenated into it upto specified depth

//5.FlatMap() method works
// FlatMap() method first map each elements using a mapping function then flattens the result into a new aarray.
// it is similar to map followed by flat with a depth of 1

//6.what is from() method 
// it creates a new shallow copied array instance
// it is useful for converting other structure such as string into array

let string="hello world";
let stringArray=Array.from(string);
console.log(stringArray)

let set=new Set([11,22,33])
let setArray=Array.from(set);
console.log(setArray)

//.7 fill() method with example
// fill method changes all elements in an array to a static value from start index upto ending index 
// last index is not inclusive

let number=[10,20,30,40,50,60];
number.fill(100,1,5);
console.log(number);

//.8 what does sort method do 
//sort() method sorts the element of an array in place and returns the sorted array
// by default it sorts string into ascending order 

//.9 What is reverse() method of an array
//reverse() method reverses the order of the element in an aray
// the first element becomes the last and last one becomes the first 

//10. How to merge two array and remove duplicate
// we can merge two arrays and remove the duplicate by using set() object which automatically removes duplicate value

let ar1=[1,2,3,4,4];
let ar2=[5,6,7,8,8];
let mergeArry=[...new Set([...ar1,...ar2])];
console.log(mergeArry)

//.11 Difference between deep copy and shallow copy of an array
// shallow copy of an array copies the structure of an aray but not object it contains 
// changes to object in the original array affect the copied array and vice versa

// deep copy copies the array and all nested objects so changes to original array do not affect the original array

let originalObject=[{a:1},{b:2}];
let shallowCopy=[...originalObject];
let deepCopy=JSON.parse(JSON.stringify(originalObject));
originalObject[1].b=50;
console.log(shallowCopy[1].b);
console.log(deepCopy[1].b);

//.12 how to find intersection of two array
// intersection can be found using the filter() method  to return the element that are present in both array

let arr3=[10,20,30,40];
let arr4=[20,30,50,60];
let intersection=arr3.filter((value)=>arr4.includes(value));
console.log(intersection)

//.13 what is sparse array and how they differ from dense array
// sparse arrays have gap between elements that is some indices are empty
// dense arrays have no gap betwwen elements that is at every index value any one element present it consumes less memory space

let sparseArray=[1,2,,4];
let denseArray=[1,2,3];
console.log(sparseArray.length);
console.log(denseArray.length);
console.log(sparseArray[2]);

//.14 How to remove duplicate from an array
// using a set which automatically removes duplicate
let dup=[10,20,30,30,40,40,50];
let uniqueNumbers=[...new Set(dup)];
console.log(uniqueNumbers);

//.15 How can you convert Array to a string
// by using toString() or join() method
let itemFruit=["Kiwi","Chicku","Papaya","Coconut"];
console.log(itemFruit.toString());
console.log(itemFruit.join("/"))

//.16 What are key(),value(),entries() method in array
// it retuns the key that is index ,value and complete entry with key value pair
let entrys=[25,50,75,100]
const key=entrys.keys();
const value=entrys.values();
const completeEntry=entrys.entries();
console.log([...key]);
console.log([...value]);
console.log([...completeEntry]);

//.17 how to flatten an array of arrays
// by using flat() method

const nestedArray=[1,[2,[3,[4,5]]]];
const flatArray=nestedArray.flat(Infinity);
console.log(flatArray)

//.18 what is array.of() method in array
// array.of() method creates a new Array instance with a variable number of arguments

let arry1=Array.of(10,20,30,40);
console.log(arry1);
let arry2=Array.of("ankush","patrawat","thakur");
console.log(arry2)

//.19 How to fill an array with specific value
// using fill() method
let  arry5=new Array(5).fill(0);
console.log(arry5);

//20. how to use array.reduceRight() method of an array
// reduceRight() method can reduce array into a single data  staring in reverse order that is starting from right and end at left
let reduceItem=[1,5,6,8];
let finalReduce=reduceItem.reduceRight((accumulator,CurrentValue)=>(accumulator + CurrentValue));
console.log(finalReduce)

//.21 what is jagged array 
// also known as array of arrrays is an array whose array elements varying in length
let jaggedArray=[[1,2,3],[10,20,30,40,50],[100,200]];
console.log(jaggedArray)

//.22 