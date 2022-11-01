const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const allSpecies = species.map(({ name, residents }) => ({
    [name]: residents.length,
  }));

  if (!animal) {
    return Object.fromEntries(
      Object.entries(Object.assign({}, ...allSpecies)).sort(),
    );
  }
  if (!animal.sex) {
    return Object.values(
      allSpecies.find((specie) => Object.keys(specie).includes(animal.specie)),
    )[0];
  }
  return species
    .find(({ name }) => name === animal.specie)
    .residents.filter(({ sex }) => sex === 'female').length;
}

module.exports = countAnimals;
