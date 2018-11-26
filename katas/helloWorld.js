const Test = require('../Test');

function hello(name) {

    return ('Hello, ' + name.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) + '!');

}

Test.assertEquals(hello('johN'), 'Hello, John!', "returns 'Hello, John!' when given 'johN'")
Test.assertEquals(hello('alice'), 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'")
Test.assertEquals(hello(), 'Hello, World!', "returns 'Hello, World!' when name is not given")
Test.assertEquals(hello(''), 'Hello, World!', "returns 'Hello, World!' when name is an empty String" )