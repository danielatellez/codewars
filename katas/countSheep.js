const Test = require('../Test');


var countSheep = function (num){
  var str = num;
  var n =[];

  for (var i = 1; i <= num; i++){
    n.push(i + " sheep...");
  }
  
    return n.join("");
}


  Test.assertEquals(countSheep(1), "1 sheep...");
  Test.assertEquals(countSheep(2), "1 sheep...2 sheep...");
  Test.assertEquals(countSheep(3), "1 sheep...2 sheep...3 sheep...");