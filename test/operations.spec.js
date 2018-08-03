describe('sumNumbers()', () => {

  it('debería devolver un numero positivo', () => {
    assert.equal(sumNumbers(2, 3), 5);
  });

  it('debería devolver un numero negativo', () => {
    assert.equal(sumNumbers(-2, -3), -5);
  });
  it('debería devolver el mismo número', () => {
    assert.equal(sumNumbers(-3, 0), -3);
  });

});

describe('restNumbers()', () => {

  it('debería devolver un numero positivo', () => {
    assert.equal(restNumbers(3, 2), 1);
  });

  it('debería devolver un numero positivo', () => {
    assert.equal(restNumbers(-2, -3), 1);
  });

  it('debería devolver un numero negativo', () => {
    assert.equal(restNumbers(-2, -1), -1);
  });

  it('debería devolver el mismo número', () => {
    assert.equal(restNumbers(-3, 0), -3);
  });

});

describe('multiplyNumbers()', () => {

  it('debería devolver un numero positivo', () => {
    assert.equal(multiplyNumbers(3, 2), 6);
  });

  it('debería devolver un numero positvo', () => {
    assert.equal(multiplyNumbers(-2, -3), 6);
  });
  it('debería devolver un numero negativo', () => {
    assert.equal(multiplyNumbers(-2, 3), -6);
  });
  it('debería devolver un numero negativo', () => {
    assert.equal(multiplyNumbers(2, -3), -6);
  });
  it('debería devolver cero', () => {
    assert.equal(multiplyNumbers(-3, 0), 0);
  });

});

describe('divisionNumers()', () => {

  it('debería devolver un numero positivo', () => {
    assert.equal(divisionNumers(4, 2), 2);
  });

  it('debería devolver un numero positvo', () => {
    assert.equal(divisionNumers(-4, -2), 2);
  });
  it('debería devolver un numero negativo', () => {
    assert.equal(divisionNumers(-4, 2), -2);
  });
  it('debería devolver un numero negativo', () => {
    assert.equal(divisionNumers(4, -2), -2);
  });
  it('debería devolver cero', () => {
    assert.equal(divisionNumers(0, 4), 0);
  });
  it('debería devolver undefined', () => {
    assert.equal(divisionNumers(0, 0), 'resultado indefinido');
  });
  it('debería devolver no se puede', () => {
    assert.equal(divisionNumers(3, 0), 'no se puede');
  });


});