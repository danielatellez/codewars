const Test = require('../Test');

var humanYearsCatYearsDogYears = function(humanYears) {
    function catYears(years) {
      if (years === 1) return 15;
      if (years === 2) return 24;
      if (years > 2) return 24 + ((years - 2) * 4);
   
    }
    
    function dogYears(years) {
      if (years === 1) return 15;
      if (years === 2) return 24;
      if (years > 2) return 24 + ((years - 2) * 5);
   
    }

    return [humanYears, catYears(humanYears), dogYears(humanYears)];
  }


    
  Test.assertEquals(humanYearsCatYearsDogYears(1), [1,15,15]);
  Test.assertEquals(humanYearsCatYearsDogYears(2), [2,24,24]);
  Test.assertEquals(humanYearsCatYearsDogYears(10), [10,56,64]);