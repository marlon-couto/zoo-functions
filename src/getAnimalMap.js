const data = require('../data/zoo_data');

const { species } = data;

const getLocation = (location) =>
  species
    .filter((specie) => specie.location === location)
    .map(({ name }) => name);

const filterSpecie = (animals) =>
  species.filter(({ name }) => animals.find((animal) => animal === name));

const filterSex = (residents, sex) =>
  residents.filter((resident) => resident.sex === sex);

const residentNames = (animal, sex) => {
  const { residents } = animal;
  return sex
    ? filterSex(residents, sex).map(({ name }) => name)
    : residents.map(({ name }) => name);
};

const getNames = (animals, sorted, sex) =>
  filterSpecie(animals).map((animal) => ({
    [animal.name]: sorted
      ? residentNames(animal, sex).sort()
      : residentNames(animal, sex),
  }));

const animalMap = (names, sorted, sex) => ({
  NE: names ? getNames(getLocation('NE'), sorted, sex) : getLocation('NE'),
  NW: names ? getNames(getLocation('NW'), sorted, sex) : getLocation('NW'),
  SE: names ? getNames(getLocation('SE'), sorted, sex) : getLocation('SE'),
  SW: names ? getNames(getLocation('SW'), sorted, sex) : getLocation('SW'),
});

function getAnimalMap(options) {
  if (!options || !options.includeNames) return animalMap();
  return animalMap(options.includeNames, options.sorted, options.sex);
}

module.exports = getAnimalMap;
