const data = require('../data/zoo_data');

const { species, hours } = data;

const exhibitionList = (day) =>
  species
    .filter((specie) => specie.availability.includes(day))
    .map((animal) => animal.name);

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

function getSchedule(scheduleTarget) {
  const grade = hourGrade();
  const validSpecie = species.some((specie) => Object.values(specie).includes(scheduleTarget));
  const validDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  if (!scheduleTarget) return grade;

  if (validSpecie) {
    return species.find((specie) => specie.name === scheduleTarget)
      .availability;
  }
  if (validDays.includes(scheduleTarget)) {
    return {
      [scheduleTarget]: grade[scheduleTarget],
    };
  }
  return grade;
}

module.exports = getSchedule;
