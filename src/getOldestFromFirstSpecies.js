const data = require('../data/zoo_data');

const { employees, species } = data;

const greaterAge = (greater, actual) =>
  (greater.age > actual.age ? greater : actual);

const oldestAnimal = (animals) => species
  .find(({ id }) => id === animals[0])
  .residents.reduce(greaterAge, 1);

function getOldestFromFirstSpecies(id) {
  const animals = employees.find(
    (employee) => employee.id === id,
  ).responsibleFor;
  return Object.values(oldestAnimal(animals));
}

module.exports = getOldestFromFirstSpecies;
