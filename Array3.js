//=======array.at()======
const arry1=[1,5,9,11,19,13];
console.log(arry1.at(2));
console.log(arry1.at(-3));
console.log(arry1[2]);

//===array.fill()=======
const arry2=[20,30,40,50,100];
console.log(arry2.fill(100,2,4));// fill with 100 from position 2 till position 4
console.log(arry2.fill(1000,1,5))// jo number hm dalenge uske bad se start hoga


const arry3=[10,13,11,15,25];
const findArry=(element)=>element>16;// 16 se greater number ka index find krega jo sabse pehle aayega usse dikhayega
console.log(arry3.findIndex(findArry));

//====Array.find()===
const arr4=[5,10,15,8,7];
const found=arr4.find((element)=>element>9);// show first elememt which has greater than 10 from starting
console.log(found);

//===Array.findIndex()====
const arr5=[25,35,97,58,69];
const isLarger=arr5.findIndex((element)=>element>50);// index value show krega jo element given value se Greater H
console.log(isLarger);

//======Array.findLast()==== reverse order m find krega==
const arr6=[25,135,65,75,95];
const arrLarger=arr6.findLast((element)=>element>100);// last se start krega or value find krega
console.log(arrLarger);

//====Array.findLastIndex()=======
const arr7=[35,97,67,45,55];
const arrLast=arr7.findLastIndex((element)=>element>40)//last se start krega jo bhi first value milegi use show kr dega   
console.log(arrLast);

//======Array.includes()=======
const arr8=[20,10,30,40,60]
console.log(arr8.includes(7000));
console.log(arr8.includes(40));

//=====Array.indexof()=======
const animals=["dog","cat","cow","lion","tiger"]
console.log(animals.indexOf("tiger"));
console.log(animals.indexOf("cow"));

//=====Array.keys()=======
const array1 = ["a", "b", "c"];
const iterator = array1.keys();
for(const key of iterator){
    console.log(key)
}

//======Array.some()====
const even=[1,3,5,6,4,8]
const evenSome=(element)=>element%2===0;
console.log(even.some(evenSome));

//===Array.toReversed()====
const items=[1,2,4,8,16]
const reverseItem=items.toReversed();
console.log(items)
console.log(reverseItem)

//=======Array.with()====replace the value at given index and make new array===
const arr11=[1,2,3,4,5,4,8];
console.log(arr11.with(2,11));
console.log(arr11)
