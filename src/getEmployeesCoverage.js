const data = require('../data/zoo_data');

const { employees, species } = data;

const verifyEmployee = (searchParam) => {
  const { name } = searchParam;

  if (
    !employees.some(
      ({ firstName, lastName, id }) =>
        firstName === name || lastName === name || id === searchParam.id,
    )
  ) {
    throw new Error('Informações inválidas');
  }
};

const findEmployee = (searchParam) => {
  if (!searchParam) return employees;

  const { name, id } = searchParam;

  if (name) {
    return employees.filter(
      ({ firstName, lastName }) => firstName === name || lastName === name,
    );
  }
  if (id) return employees.filter((employee) => employee.id === id);
};

const findAnimals = ({ responsibleFor }) =>
  species.filter(({ id }) => responsibleFor.some((index) => index === id));

function getEmployeesCoverage(searchParam) {
  if (searchParam) {
    verifyEmployee(searchParam);
  }
  const coverage = findEmployee(searchParam).map((employee) => ({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: findAnimals(employee).map((animal) => `${animal.name}`),
    locations: findAnimals(employee).map((animal) => `${animal.location}`),
  }));

  return coverage.length > 1 ? coverage : coverage.find((only) => only);
}

module.exports = getEmployeesCoverage;
