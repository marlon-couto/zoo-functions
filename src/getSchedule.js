const data = require('../data/zoo_data');

const { species, hours } = data;

const exhibitionList = (day) =>
  species
    .filter(({ availability }) => availability.includes(day))
    .map(({ name }) => name);

const hourGrade = () =>
  Object.assign(
    {},
    ...Object.keys(hours).map((day) => {
      const { open, close } = hours[day];
      return {
        [day]: {
          officeHour:
            day !== 'Monday'
              ? `Open from ${open}am until ${close}pm`
              : 'CLOSED',
          exhibition:
            day !== 'Monday' ? exhibitionList(day) : 'The zoo will be closed!',
        },
      };
    }),
  );

const validSpecie = (target) => species.some((specie) => Object.values(specie).includes(target));

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return hourGrade();

  if (validSpecie(scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget)
      .availability;
  }
  if (Object.keys(hours).includes(scheduleTarget)) {
    return {
      [scheduleTarget]: hourGrade()[scheduleTarget],
    };
  }
  return hourGrade();
}

module.exports = getSchedule;
