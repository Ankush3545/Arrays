/*let marks=[95,97,58,85];
console.log(marks);
console.log(marks.length)// here length is property i.e which returns value

let heroes=["antman","hulk","spiderman","batman","saktiman"]
//console.log(heroes);
//console.log(heroes.length)
//console.log(marks[2]);
//console.log(heroes[1]);
marks[1]=100;
console.log(marks);

//for(i=0;i<heroes.length;i++){
  //  console.log(heroes[i]);
//}

for(let hero of heroes){
    console.log(hero)   
}

let cities=["noida","faridabad","ballabgarh","jaipur","sonipat"]
for(city of cities){
    console.log(city.toUpperCase())
}*/

/*let marks=[85,97,44,37,76,60]
let sum=0;
for( let mark of marks){
    //console.log(mark)
    sum=sum+mark;
}
console.log(sum);
let average=sum/marks.length;
console.log(`average marks of class is = ${average}`)*/

/*let prices=[250,645,300,900,50]

for(i=0;i<prices.length;i++){
    let offer=prices[i]/10;
    prices[i]=prices[i]-offer;
}
console.log(prices);
/*for(i=0;i<prices.length;i++){
    let offer=prices[i]/10;
    prices[i]=prices[i]-offer;
}
console.log(prices)

prices.push(125);
console.log(prices)
prices.pop();
console.log(prices)*/

//==========================Array Method== push,pop,shift,unshift,concat
let foodItems=["apple","mango","banana","litchi","orange"]
let sweetItems=["paneer","chocalate","sncaks","pastries"]
/*foodItems.pop();
console.log(foodItems);
foodItems.push("kiwi");
console.log(foodItems);
foodItems.shift();
console.log(foodItems)
foodItems.unshift("papaya");
console.log(foodItems)
let items=foodItems.concat(sweetItems);
console.log(items)
let iitems=sweetItems.concat(foodItems);
console.log(iitems);
 let newItems=sweetItems.splice(0,2);
console.log(newItems)*/
//console.log(sweetItems.slice(  ))
//console.log(sweetItems.splice(1,2,"aaaa"))

let companies=["Bloomberg","microsoft","Uber","Google","IBM","Netflix"];
//console.log(companies.shift());
//console.log(companies)
//companies.splice(2,1,"ola")
//console.log(companies)
console.log(companies.push("amazon"));
console.log(companies)