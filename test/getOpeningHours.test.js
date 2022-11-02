const getOpeningHours = require('../src/getOpeningHours');

const openingHours = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

describe('Testes da função getOpeningHours', () => {
  it('Verifica se getOpeningHours existe e é uma função', () => {
    expect(getOpeningHours()).toBeDefined();
    expect(typeof getOpeningHours).toBe('function');
  });

  it('Retorna os horários de todos os dias caso nenhum argumento seja passado na chamada da função', () => {
    expect(getOpeningHours()).toEqual(openingHours);
  });

  it('Retorna "The zoo is closed" quando Monday e 09:00-AM são passados como argumento', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });

  it('Retorna "The zoo is open" quando Tuesday e 04:00-PM são passados como argumento', () => {
    expect(getOpeningHours('Tuesday', '04:00-PM')).toBe('The zoo is open');
  });

  it('Retorna "The zoo is open" quando Tuesday e 09:00-AM são passados como argumento', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });

  it('Lança um erro com a mensagem "The day must be valid" quando um dia incorreto é passado como argumento', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(/^The day must be valid. Example: Monday$/);
  });

  it('Lança um erro com a mensagem "The abbreviation must be \'AM\' or \'PM\'" quando 09:00-ZM é passada como argumento', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });

  it('Lança um erro com a mensagem "The hour should represent a number" quando C9:00-AM é passada como argumento', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(/^The hour should represent a number$/);
  });

  it('Lança um erro com a mensagem "The minutes should represent a number" quando 09:c0-AM é passada como argumento', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow(/^The minutes should represent a number$/);
  });

  it('Lança um erro com a mensagem "The hour must be between 0 and 12" quando 13:00-AM é passada como argumento', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow(/^The hour must be between 0 and 12$/);
  });

  it('Lança um erro com a mensagem "The minutes must be between 0 and 59" quando 09:60-AM é passada como argumento', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow(/^The minutes must be between 0 and 59$/);
  });
});
