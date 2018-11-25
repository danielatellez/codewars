const Test = require('../Test');


function distribute(m, n) {

    var candy = m;
    var kids = n;

   if (kids <= 0){
       return [];
   }

   else {
        var resultArr = [];
        for(var i = 0; i < kids; i++){
            resultArr.push(0);
        }
        for (var i = 0; i < candy; i++){
            var index = i;
            if(i >= kids){
                index = index - kids;
            }
            resultArr[index]++;
        }
        return resultArr.reverse();
   }
   
  }


  Test.assertEquals(distribute(-5, 10), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  Test.assertEquals(distribute( 0, 10), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  Test.assertEquals(distribute( 5, 10), [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);
  Test.assertEquals(distribute(10, 10), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  Test.assertEquals(distribute(15, 10), [1, 1, 1, 1, 1, 2, 2, 2, 2, 2]);
  Test.assertEquals(distribute(-5,  0), []);
  Test.assertEquals(distribute( 0,  0), []);
  Test.assertEquals(distribute( 5,  0), []);
  Test.assertEquals(distribute(10,  0), []);
  Test.assertEquals(distribute(15,  0), []);
  Test.assertEquals(distribute(-5, -5), []);
  Test.assertEquals(distribute( 0, -5), []);
  Test.assertEquals(distribute( 5, -5), []);
  Test.assertEquals(distribute(10, -5), []);
  Test.assertEquals(distribute(15, -5), []);