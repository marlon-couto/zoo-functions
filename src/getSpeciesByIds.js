const data = require('../data/zoo_data');

const { species } = data;

const getSpeciesByIds = (...ids) => {
  try {
    return species.filter(({ id }) => ids.some((searchId) => id === searchId));
  } catch (error) {
    return [];
  }
};

module.exports = getSpeciesByIds;
