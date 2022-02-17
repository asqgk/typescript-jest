import { Product } from './product';

const createSut = (name: string, price: number) => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have properties name and price', () => {
    const sut = createSut('Coca-Cola', 10.5);

    expect(sut).toHaveProperty('name', 'Coca-Cola');
    expect(sut.price).toBeCloseTo(10.5);
  });
});
