describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).toBeGreaterThan(9);
  });

  it('should split tests', () => {
    const number = 10;

    expect(number).not.toBeNull();
    expect(number).toBeTruthy();

    expect(number).toBeCloseTo(10.0001);
    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Francisco', age: 30 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).not.toBe(anotherPerson);
    expect(person).toHaveProperty('age', 30);
  });
});
