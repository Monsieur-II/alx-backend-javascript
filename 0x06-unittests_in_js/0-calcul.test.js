const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('both numbers are integers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('one number is a float', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('one number is a string', function () {
    assert.strictEqual(calculateNumber(1, '3'), 4);
  });

  it('both numbers are strings', function () {
    assert.strictEqual(calculateNumber('1', '3'), 4);
  });

  it('one number is a string and the other is a float', function () {
    assert.strictEqual(calculateNumber('1', 3.7), 5);
  });

  it('both numbers are floats', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('both numbers are floats with rounding', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('both numbers have more than 2 decimal places', function () {
    assert.strictEqual(calculateNumber(1.555, 3.777), 6);
  });
});
