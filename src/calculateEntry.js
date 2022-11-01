const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const child = entrants.filter(({ age }) => age < 18).length;
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const senior = entrants.filter(({ age }) => age >= 50).length;

  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const count = Object.values(countEntrants(entrants));
  return prices.child * count[0] + prices.adult * count[1] + prices.senior * count[2];
}

module.exports = { calculateEntry, countEntrants };
