const Test = require('../Test');

var stringToNumber = function(str){
    return parseInt(str, 10);

  }

    Test.assertEquals(stringToNumber("1234"),1234)
    Test.assertEquals(stringToNumber("605"), 605)
    Test.assertEquals(stringToNumber("1405"),1405)
    Test.assertEquals(stringToNumber("-7"),  -7)