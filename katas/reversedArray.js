const Test = require('../Test');

function digitize(n) {

    var changeString = n.toString();
    var splitNumber = changeString.split("");
    var reversedOne = splitNumber.reverse();
   
    return reversedOne.map(Number);
  
}


 
Test.assertEquals(digitize(35231),[1,3,2,5,3]);