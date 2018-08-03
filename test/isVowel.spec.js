const assert = require('assert');
const isVowel = require('./isVowel');

describe('isVowel()', () => {

  it('debería devolver true para letra a', () => {
    assert.equal(isVowel('a'), true);
  });

  it('debería devolver false para letra a', () => {
    assert.equal(isVowel('b'), false);
  });

});