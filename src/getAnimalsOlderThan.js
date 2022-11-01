const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  return species
    .find(({ name }) => name === animal)
    .residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
