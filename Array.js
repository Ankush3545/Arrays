const fruits=["Apple","Banana","papaya"]
console.log(fruits.length)

const fruits2=new Array("Apple","Banana","Papaya")
console.log(fruits2.length)

const fruit3="apple,banana".split(",");
console.log(fruit3)

const fruitsString=fruits.join(" ");
console.log(fruitsString);

const fruits2String=fruits2.join(" ; ");
console.log(fruits2String)

console.log(fruits[1]);
console.log(fruits[fruits.length-1]);

console.log(fruits2.indexOf("Banana"));
console.log(fruits2.indexOf("Apple"));

console.log(fruits.includes("Banana"));
console.log(fruits.includes("banana"));
console.log(fruits2.includes("cherry"));

console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("banana"));

//=========push(),pop()========
const FRUITS=["Chocalate","Cherry","Grapes"];
FRUITS.push("Litchi");
console.log(FRUITS);

const items=["chips","patato","namkeen","haldiram"];
const deletedItem=items.pop();
console.log(items);
console.log(deletedItem);

//============splice() in array=======
const fruitsSplice=["Apple","Banana","Mango","Papaya","Kiwi","Orange"];
const removedItems=fruitsSplice.splice(2,2);
console.log(fruitsSplice);
console.log(removedItems);

//==========splice() truncate items=======
const fruitsTruncate=["Apple","Banana","Mango","Papaya","Kiwi","Orange"]
const start=2;
const replaceTruncateItems=fruitsTruncate.splice(start);
console.log(fruitsTruncate);
console.log(replaceTruncateItems);

//=========shift() and unshift()=========
const fruitsShift=["Apple","Banana","Mango","Papaya","Orange","Chocos"];
const deletedShift=fruitsShift.shift();
const deletedUnshift=fruitsShift.unshift("Chiku")
console.log(fruitsShift);
console.log(deletedShift);
console.log(deletedUnshift);
//============ removed multiple items from beginning of an array=========
const mulFruits=["Apple","Banana","Mango","Papaya","Kiwi"];
const bstart=0;
const bdelete=3;
mulFruits.splice(bstart,bdelete);
console.log(mulFruits);





