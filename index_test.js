// 1. Import the assert module
const assert = require('assert');

// 2. Import the Rooster module
const Rooster = require('../index');

// 3. Write a describe block for Rooster
describe('Rooster', () => {
  // 4. Write another describe block for the .announceDawn method
  describe('.announceDawn', () => {
    // 5. Write an it block that tests that the method 'returns a rooster call'
    it('returns a rooster call', () => {
      // 6. Define expected output
      const expected = 'cock-a-doodle-doo!';

      // 7. Call Rooster.announceDawn and store the result in a variable
      const actual = Rooster.announceDawn();

      // 8. Use an assert method to compare actual and expected result
      assert.strictEqual(actual, expected);
    });
  });

  // 8. Below the describe block for .announceDawn in index_test.js write another block for .timeAtDawn
  describe('.timeAtDawn', () => {
    // 9. Test that .timeAtDawn 'returns its argument as a string'
    it('returns its argument as a string', () => {
      // Setup
      const argument = 5;
      // Exercise
      const result = Rooster.timeAtDawn(argument);
      // Verify
      assert.strictEqual(result, '5');
    });

    // 10. Test that .timeAtDawn 'throws an error if passed a number less than 0'
    it('throws an error if passed a number less than 0', () => {
      // Setup
      const invalidHour = -1;
      // Exercise and Verify
      assert.throws(() => {
        Rooster.timeAtDawn(invalidHour);
      }, RangeError);
    });

    // 11. Test that .timeAtDawn 'throws an error if passed a number greater than 23'
    it('throws an error if passed a number greater than 23', () => {
      // Setup
      const invalidHour = 24;
      // Exercise and Verify
      assert.throws(() => {
        Rooster.timeAtDawn(invalidHour);
      }, RangeError);
    });
  });
});
