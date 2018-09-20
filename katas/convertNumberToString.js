const Test = require('../Test');

function numberToString(num) {
    return num.toString();    
}

Test.assertEquals(numberToString(67) === '67')