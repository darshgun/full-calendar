import {
  days,
  defaultGridRowCount,
  defaultGridColumnCount,
} from '../FullCalendar/config';

/**
 * Reorder the calendar weekdays based on the start day of the week
 *
 * @param   {string}  startDayOfMonth   [startDayOfMonth description]
 *
 * @return  {array}                     [return description]
 */
export const rearrangeWeekDays = (startDayOfWeek) => {
  const startDay = days.indexOf(startDayOfWeek);

  return days.slice(startDay).concat(days.slice(0, startDay));
};

export const generateCalendarConfig = (
  rearrangedWeekDays,
  numberOfDaysInMonth,
  startDayOfMonth
) => {
  const calendarConfig = [];

  // Rearranging days according to the start day of week
  // const rearrangedWeekDays = rearrangeWeekDays(startDayOfWeek);

  // Identifying if the number of rows need to be 6 instead of default 5
  const gridRows =
    defaultGridRowCount * defaultGridColumnCount >
    rearrangedWeekDays.indexOf(startDayOfMonth) + numberOfDaysInMonth
      ? defaultGridRowCount
      : defaultGridRowCount + 1;

  let currentDate;
  for (let row = 0; row < gridRows; row++) {
    // Adding calendar rows
    calendarConfig.push([]);

    for (let cell = 0; cell < defaultGridColumnCount; cell++) {
      if (row === 0 && rearrangedWeekDays[cell] === startDayOfMonth) {
        currentDate = 1;
      } else if (currentDate >= 1) {
        if (currentDate === numberOfDaysInMonth) {
          currentDate = undefined;
        } else {
          currentDate++;
        }
      }

      calendarConfig[row].push(currentDate);
    }
  }

  return calendarConfig;
};
