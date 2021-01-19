for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log();
console.log("Array Loop");
var reviews = [5, 4.5, 1, 3];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Review average = " + average);
console.log();
var sportsOne = ["Golf", "Cricket", "Tennis", "Swiming"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
console.log();
console.log("Simplified for loop");
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var iterator = sportsOne_1[_i];
    console.log(iterator);
}
console.log("\nConditional for loop ");
for (var _a = 0, sportsOne_2 = sportsOne; _a < sportsOne_2.length; _a++) {
    var iterator = sportsOne_2[_a];
    if (iterator == "Cricket") {
        console.log(iterator + " My Favorite!");
    }
    else {
        console.log(iterator);
    }
}
console.log("\nDynamic Array");
var sportTwo = ["Golf", "Cricket", "Tennis"];
sportTwo.push("Baseball");
sportTwo.push("Football");
for (var _b = 0, sportTwo_1 = sportTwo; _b < sportTwo_1.length; _b++) {
    var iterator = sportTwo_1[_b];
    console.log(iterator);
}
