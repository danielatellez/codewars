const Test = require('../Test');

function highAndLow(numbers){
    var string = numbers.split(' ');  
    var highestval = Math.max.apply(Math, string);
    var lowestval = Math.min.apply(Math, string);
    var combined = [highestval, lowestval];
    var total = combined.join(" "); 
 
    return total;

}

  Test.assertEquals(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214")
