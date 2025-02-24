const fruits=["Apple","Mango","Banana"];
fruits.splice(1,2,"Litchi","Cherry");
console.log(fruits);

//============== for of () loop in array========

const forFruits=["Apple","Mango","Litchi","Kiwi"];
for( const fruits1 of forFruits){
    console.log(fruits1)

}

//============forEach()=========
const vegie=["Patato","Tomamto","Onion",]
vegie.forEach((items,index)=>{
    console.log(index,items)

})

//==========merge multiple arrays =========using concat()===
const item1=["Chips","Pepsi","Chocolate","Brownie"]
const item2=["Kurkure","Namkeen","Frooti"];
//const final_item=item1.concat(item2);
const final_item=item2.concat(item1)
console.log(final_item);
console.log(item1);
console.log(item2);

//=======copy an array with the help of spread operator i.e ...===

const cities=["Faridabad","Noida","Pune","Delhi"];
const copyCities=[...cities];
console.log(copyCities);

const copyCities2=Array.from(cities);//using Array from method
console.log(copyCities2);

const copyCities3=cities.slice();
console.log(copyCities3);
// note all these copy method create shallow copy not deep copy

//========
const states=["Haryana","Mumbai","Punjab","Rajasthan"];
const statesCopy=states;
console.log(states===statesCopy);
statesCopy.unshift("Goa","Himachal Pradesh");
console.log(statesCopy);
console.log(states);



