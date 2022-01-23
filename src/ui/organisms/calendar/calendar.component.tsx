import {
  addWeeks,
  subWeeks,
  addMonths,
  subMonths,
  isSameDay,
  isWeekend,
  isSameMonth,
} from 'date-fns';
import classnames from 'classnames';
import { memo, Children, useState, useEffect, MouseEvent } from 'react';

import { MobileCalendarCard, DesktopCalendarCard } from '@ui';
import { DefaultCalendarHeader } from './parts';

import { MEDIUM_SCREEN_BREAKPOINT } from '@infrastructure';
import { generateWeek, generateMonth, generateDatesArray, useDeviceDetect } from '@utils';

import { ICalendarProps } from './calendar.types';

import './calendar.styles.scss';

const CalendarComponent = ({
  events,
  mode = 'month',
  onCalendarEventClick,
  onSelectedDatesChange,
  displayWeekends = true,
  defaultSelectedDates = [],
  enableDateSelection = true,
  defaultSelectedDate = new Date(),
  selectedDates: customSelectedDates,
}: ICalendarProps): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState(defaultSelectedDate);
  const [selectionStartDate, setSelectionStartDate] = useState<Date | null>(null);
  const [selectedDates, setSelectedDates] = useState<Date[]>(defaultSelectedDates);

  const { windowSize } = useDeviceDetect();
  const shouldRenderMobileCards = windowSize.width < MEDIUM_SCREEN_BREAKPOINT;
  const isOneWeekMode = mode === 'week' || shouldRenderMobileCards;

  const currentMonth = generateMonth(selectedDate);

  useEffect(() => {
    if (onSelectedDatesChange) {
      onSelectedDatesChange(selectedDates);
    }
  }, [selectedDates]);

  useEffect(() => {
    if (customSelectedDates) {
      setSelectedDates(customSelectedDates);
    }
  }, [customSelectedDates]);

  const onRightArrowClick = () => {
    const functionToExecute = isOneWeekMode ? addWeeks : addMonths;
    const newSelectedDate = functionToExecute(selectedDate, 1);

    setSelectedDate(newSelectedDate);
  };

  const onLeftArrowClick = () => {
    const functionToExecute = isOneWeekMode ? subWeeks : subMonths;
    const newSelectedDate = functionToExecute(selectedDate, 1);

    setSelectedDate(newSelectedDate);
  };

  const onMouseDown = (date: Date) => (event: MouseEvent) => {
    if (event.currentTarget !== event.target) return;

    if (!enableDateSelection) {
      return;
    }

    setSelectedDates([date]);
    setSelectionStartDate(date);
  };

  const onMouseUp = () => {
    if (!enableDateSelection) {
      return;
    }

    setSelectionStartDate(null);
  };

  const onMouseOver = (date: Date) => () => {
    if (!enableDateSelection || !selectionStartDate) {
      return;
    }

    const generatedDatesArray = generateDatesArray(selectionStartDate, date);
    setSelectedDates([selectionStartDate, ...generatedDatesArray, date]);
  };

  const getEventsForDate = (date: Date) => events.filter((_event) => isSameDay(_event.start, date));

  const dataToProcess = isOneWeekMode ? [generateWeek(selectedDate)] : currentMonth;

  return (
    <div className="calendar-wrapper">
      <DefaultCalendarHeader
        currentMonth={selectedDate}
        onLeftArrowClick={onLeftArrowClick}
        className="calendar-wrapper__header"
        onRightArrowClick={onRightArrowClick}
      />
      <div
        id="calendar-wrapper"
        onMouseUp={onMouseUp}
        onMouseDown={(event) => {
          // @ts-expect-error
          if (event.target.id) {
            setSelectedDates([]);
            setSelectionStartDate(null);
          }
        }}
        className={classnames(
          'calendar-wrapper__calendar',
          shouldRenderMobileCards && 'calendar-wrapper__calendar--mobile',
          !shouldRenderMobileCards && displayWeekends && 'calendar-wrapper__calendar--weekends',
        )}
      >
        {Children.toArray(
          dataToProcess.map((_currentWeek) => (
            <>
              {Children.toArray(
                _currentWeek.map((_currentDay) => {
                  const weekend = isWeekend(_currentDay);
                  if (weekend && !displayWeekends) {
                    return null;
                  }

                  const currentDayEvents = getEventsForDate(_currentDay);
                  const sameMonth = isSameMonth(selectedDate, _currentDay);
                  const selected = selectedDates.some((_date) => isSameDay(_date, _currentDay));
                  const CalendarCard = shouldRenderMobileCards
                    ? MobileCalendarCard
                    : DesktopCalendarCard;

                  return (
                    <CalendarCard
                      date={_currentDay}
                      selected={selected}
                      sameMonth={sameMonth}
                      onMouseUp={onMouseUp}
                      events={currentDayEvents}
                      onMouseDown={onMouseDown(_currentDay)}
                      onMouseOver={onMouseOver(_currentDay)}
                      onCalendarEventClick={onCalendarEventClick}
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

export const Calendar = memo(CalendarComponent);
