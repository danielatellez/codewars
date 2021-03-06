const Test = require('../Test');

function maps(x){
    return x.map(x => x * 2);

}


Test.assertEquals(maps([1, 2, 3]), [2, 4, 6]);
Test.assertEquals(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
Test.assertEquals(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);