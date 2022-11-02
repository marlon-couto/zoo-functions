const data = require('../data/zoo_data');

const { species } = data;

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) return [];
  return species.filter(({ id }) => ids.some((searchId) => id === searchId));
};

module.exports = getSpeciesByIds;
