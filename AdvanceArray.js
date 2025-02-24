//==========array.filter()==
const countries=["India","Nepal","Bhutan","Dubai","South Africa"];
const result=countries.filter((country)=>country.length > 5);
console.log(result);

//==========find object in an array=========
const dataFruits=[
    {name:"Apple", quantity:2},
    {name:"banana",quantity:5},
    {name:"orange",quantity:10}
];

function isApple(fruit){
  return fruit.name==="Apple"
}
console.log(dataFruits.find(isApple));

//======using arrow function and destructuring========
const dataCities=[
    {city:"Faridabad",population:500},
    {city:"noida",population:1000},
    {city:"Delhi",population:5000}
];
const cityresult=dataCities.find(({population})=>population===1000);
console.log(cityresult);

//========converting a for loop to forEach loop=======
const fruit=["Apple","Mango","Orange","Banana"];
const copyItems=[];

//==before

for(let i=0;i<fruit.length;i++){
    copyItems.push(fruit[i]);
}
//====after==
fruit.forEach((item)=>{
    copyItems.push(item)
})

//========array.map()========
const arry1=[1,5,8,9,11];
const map1=arry1.map((x)=>x*3);
console.log(map1);

//=another example of array.map()==
const squareRoot=[1,4,9,25,144];
const squareResult=squareRoot.map((num)=>
    Math.sqrt(num)
)
console.log(squareRoot);
console.log(squareResult);

//=======Array.forEach()======
const areas=["Local","City","Town","State","Country"];
areas.forEach((area)=>console.log(area));

//=====Array.reverse()====

const numbers=[2,5,7,9,11,15,20];
console.log(numbers)
const newNum=numbers.reverse();
//console.log(numbers);
console.log(`Reverse number:${newNum}`);

//=======Array.sort()=======
const months=["March","January","February","December"];
const digit=[1,5,3,2,9]

digit.sort();
console.log(digit)

months.sort();
console.log(months)

const ddigit=[25,35,45,15,5]
const newDDigit=ddigit.toSorted()
console.log(ddigit)
console.log(newDDigit);

