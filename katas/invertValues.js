const Test = require('../Test');

function invert(array) {
    return array.map(el => el * -1); 
   
 }


 

Test.assertEquals(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
Test.assertEquals(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
Test.assertEquals(invert([]), []);
Test.assertEquals(invert([0]), [0]);