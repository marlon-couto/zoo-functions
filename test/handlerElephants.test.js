const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('A função handlerElephants existe e é uma função', () => {
    expect(handlerElephants).toBeDefined();
    expect(typeof handlerElephants).toBe('function');
  });

  it('Retorna undefined quando nenhum argumento é passado pra função', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Retorna a quantidade de elefantes quando "count" é passado como argumento', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Retorna os nomes dos elefantes quando "names" é passado como argumento', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  it('Retorna a média da idade dos elefantes quando "averageAge" é passado como argumento', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5, 2);
  });

  it('Retorna a localização dos elefantes quando o "location" é passado como argumento', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('Retorna a popularidade dos elefantes quando o "popularity" é passado como argumento', () => {
    expect(handlerElephants('popularity')).toBeGreaterThan(4);
  });

  it('Retorna um array de dias da semana quando o argumento "availability" é passado', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });

  it('Retorna "Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Retorna null caso seja passado um argumento inexistente', () => {
    expect(handlerElephants('food')).toBeNull();
  });
});
