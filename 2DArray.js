const board=[
    ["R","N","B","Q","K","B","N","R"],
    ["P","P","P","P","P","P","P","P"],
    [" "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "],
    ["p","p","p","p","p","p","p","p"],
    ["r","n","b","q","k","b","n","r"],
];
console.log(`${board.join("\n")}`);
//console.log(board)
board[4][4]=board[6][4];
board[6][4]=" ";
console.log(board.join("\n"));

//============
const values=[];
for(let x=0;x<10;x++){
    values.push([2 ** x , 2 * x ** 2])
}
console.table(values);

