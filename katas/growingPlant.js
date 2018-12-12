const Test = require('../Test');

function growingPlant(upSpeed, downSpeed, desiredHeight) {
    for(var i = 0; upSpeed.length < i; i++){
        return i;
    }
    
  }

Test.assertEquals(growingPlant(100,10,910),10)
Test.assertEquals(growingPlant(10,9,4),1)