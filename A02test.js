// This file tests our application code - open this file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.


// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});

QUnit.test('Testing our age function', function (assert) {
    assert.equal(getAge("10"),0, 'does not work with only day or month');
    assert.equal(getAge("2014"),0, 'does not work with only year');
    assert.equal(getAge(""),0, 'does not work with empty date');
    assert.equal(getAge("2012-08-12"),5, ' work with complete date');
    // assert.strictEqual(max(3, 1, 2), 3, 'All positive numbers');
    // assert.strictEqual(max(-10, 5, 3, 99), 99, 'Positive and negative numbers');
    // assert.strictEqual(max(-14, -22, -5), -5, 'All positive numbers');
});

