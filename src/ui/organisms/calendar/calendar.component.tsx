import { Children, useState } from 'react';
import {
  getYear,
  getMonth,
  addMonths,
  subMonths,
  isSameDay,
  isWeekend,
  isSameMonth,
} from 'date-fns';

import { Typography, DesktopCalendarCard } from '@ui';

import { generateMonth, getMonthNameById, generateDatesArray } from '@utils';

import { ICalendarProps } from './calendar.types';

import './calendar.styles.scss';

export const Calendar = ({
  weekends = true,
  dateSelection = true,
}: ICalendarProps): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [selectionStartDate, setSelectionStartDate] = useState<Date | null>(null);

  const currentMonth = generateMonth(selectedDate);

  const onRightArrowClick = () => {
    const newSelectedDate = addMonths(selectedDate, 1);

    setSelectedDate(newSelectedDate);
  };

  const onLeftArrowClick = () => {
    const newSelectedDate = subMonths(selectedDate, 1);

    setSelectedDate(newSelectedDate);
  };

  const onMouseDown = (date: Date) => () => {
    if (!dateSelection) {
      return;
    }

    setSelectedDates([date]);
    setSelectionStartDate(date);
  };

  const onMouseUp = () => {
    if (!dateSelection) {
      return;
    }

    setSelectionStartDate(null);
  };

  const onMouseOver = (date: Date) => () => {
    if (!dateSelection || !selectionStartDate) {
      return;
    }

    const generatedDatesArray = generateDatesArray(selectionStartDate, date);
    setSelectedDates([selectionStartDate, ...generatedDatesArray, date]);
  };

  return (
    <div className="calendar-wrapper">
      <Typography as="h2" strong>
        <span onClick={onLeftArrowClick}>{'< '}</span>
        <span onClick={onRightArrowClick}>{' >'}</span>
        {`${getMonthNameById(getMonth(selectedDate))} ${getYear(selectedDate)}`}
      </Typography>
      <div
        id="calendar-wrapper"
        style={{
          padding: '0.5rem',
          display: 'grid',
          gridTemplateColumns: `repeat(${weekends ? 7 : 5}, 1fr)`,
          gap: '0.5em',
        }}
        onMouseUp={onMouseUp}
        onMouseDown={(event) => {
          // @ts-expect-error
          if (event.target.id) {
            setSelectedDates([]);
            setSelectionStartDate(null);
          }
        }}
      >
        {Children.toArray(
          currentMonth.map((_currentWeek) => (
            <>
              {Children.toArray(
                _currentWeek.map((_currentDay) => {
                  const weekend = isWeekend(_currentDay);
                  if (weekend && !weekends) {
                    return null;
                  }

                  const sameMonth = isSameMonth(selectedDate, _currentDay);
                  const selected = selectedDates.some((_date) => isSameDay(_date, _currentDay));

                  return (
                    <DesktopCalendarCard
                      date={_currentDay}
                      selected={selected}
                      sameMonth={sameMonth}
                      onMouseUp={onMouseUp}
                      onMouseDown={onMouseDown(_currentDay)}
                      onMouseOver={onMouseOver(_currentDay)}
                      onClick={(event) => event.preventDefault()}
                      events={[
                        { title: 'John Smith', start: new Date() },
                        { title: 'John Smith', start: new Date() },
                        { title: 'John Smith', start: new Date() },
                      ]}
                    />
                  );
                }),
              )}
            </>
          )),
        )}
      </div>
    </div>
  );
};
