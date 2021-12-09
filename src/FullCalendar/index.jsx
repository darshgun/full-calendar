import React from 'react';
import { rearrangeWeekDays, generateCalendarConfig } from '../helpers';
import * as styles from './FC.module.scss';

function FullCalendar() {
  const rearrangedWeekDays = rearrangeWeekDays('Mon');
  const calendarConfiguration = generateCalendarConfig(
    rearrangedWeekDays,
    30,
    'Wed'
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.calendar}>
        <div className={styles.header}>
          {rearrangedWeekDays.map((day) => (
            <div className={styles.cell} key={day}>
              {day}
            </div>
          ))}
        </div>
        <div className={styles.body}>
          {calendarConfiguration.map((week) => (
            <div className={styles.row}>
              {week.map((day) => (
                <div className={styles.cell} key={day}>
                  {day}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FullCalendar;
