import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName, cpf', () => {
    const sut = createIndividualCustomer(
      'Francisco',
      'Dos Passos',
      '111.111.111-11',
    );
    expect(sut).toHaveProperty('firstName', 'Francisco');
    expect(sut).toHaveProperty('lastName', 'Dos Passos');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('should have methods to get name and idn for individual customers', () => {
    const sut = createIndividualCustomer(
      'Francisco',
      'Dos Passos',
      '111.111.111-11',
    );
    expect(sut.getName()).toBe('Francisco Dos Passos');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Empresa Maluca', '1234');
    expect(sut).toHaveProperty('name', 'Empresa Maluca');
    expect(sut).toHaveProperty('cnpj', '1234');
  });

  it('should have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Empresa Maluca', '1234');
    expect(sut.getName()).toBe('Empresa Maluca');
    expect(sut.getIDN()).toBe('1234');
  });
});
