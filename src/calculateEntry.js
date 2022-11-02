const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  return {
    child: entrants.filter(({ age }) => age < 18).length,
    adult: entrants.filter(({ age }) => age >= 18 && age < 50).length,
    senior: entrants.filter(({ age }) => age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const count = Object.values(countEntrants(entrants));
  return prices.child * count[0] + prices.adult * count[1] + prices.senior * count[2];
}

module.exports = { calculateEntry, countEntrants };
