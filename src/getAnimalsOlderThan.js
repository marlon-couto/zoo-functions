const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const residents = species.find(({ name }) => name === animal);
  return residents.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
