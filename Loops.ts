for(let i =0;i <5; i++){
    console.log(i);
}
console.log();

console.log("Array Loop")
let reviews: number[] =[5,4.5,1,3];
let total: number =0;
for (let i = 0;i< reviews.length; i++){    
    console.log(reviews[i]);
    total+=reviews[i];
    }
let average: number = total/reviews.length;
console.log("Review average = "+ average);
console.log();

let sportsOne: string[] =["Golf","Cricket","Tennis","Swiming"];
for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);    
}

console.log();
console.log("Simplified for loop");
for (let iterator of sportsOne) {
    console.log(iterator);
}

console.log("\nConditional for loop ");
for (let iterator of sportsOne) {
    if(iterator == "Cricket"){
        console.log(iterator +" My Favorite!");
    }
    else{
        console.log(iterator);
    }
}

console.log("\nDynamic Array");
let sportTwo: string[] = ["Golf","Cricket","Tennis"];
sportTwo.push("Baseball");
sportTwo.push("Football");
for (const iterator of sportTwo) {
    console.log(iterator);
}